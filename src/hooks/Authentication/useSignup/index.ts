import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';

import { GlobalUser } from '../../../stores/User';
import {
  FireSignupType,
  signup as fireSignup,
} from '../../../utils/Firebase/signup';
import { useInsertUserMutation } from '../../../utils/graphql/generated';
import { SetErrorFn, useAuthHelper } from '../useAuthHelper';

import { checkAuthToken } from './checkAuthToken';

export type SignupPropsType = {
  name: string;
} & FireSignupType;

export const useSignup = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // mutationで作成するデータを格納
  const setGlobalUser = useSetRecoilState(GlobalUser);

  // userを追加するためのGraohQL Mutation Hooks
  const [insertMutation, { error: apolloError }] = useInsertUserMutation();

  const formValidation = (setError: SetErrorFn) => {
    let invalidValidation = false;

    if (!nameRef.current?.value) {
      setError('name', '名前を入力してください。');
      invalidValidation = true;
    }

    if (!emailRef.current?.value) {
      setError('email', 'メールアドレスを入力してください。');
      invalidValidation = true;
    }

    if (!passwordRef.current?.value) {
      setError('password', 'パスワードを入力してください。');
      invalidValidation = true;
    }

    return invalidValidation;
  };

  // 実際のサインアップのロジック
  const signup = async () => {
    // Firebaseのサインアップ処理を実行
    const { user } = await fireSignup({
      email: emailRef.current?.value || '',
      password: passwordRef.current?.value || '',
    });

    if (!user?.uid) throw new Error('ユーザーの登録に失敗しました。');

    // アカウントにトークンが設定されるまで待機
    await checkAuthToken(user.uid);

    // Hasuraにuserを作成する
    const apolloResponse = await insertMutation({
      variables: {
        id: user.uid,
        name: nameRef.current?.value || '',
        email: emailRef.current?.value || '',
      },
    });

    if (apolloResponse.data?.insert_users_one?.id) {
      // GraphQLでデータが作成された後に確実にデータを格納する
      setGlobalUser(apolloResponse.data?.insert_users_one);
    } else {
      throw new Error('ユーザーの登録に失敗しました。');
    }
  };

  // useAuthHelperを使用して、実際に認証に使用する関数を生成する
  const { authExecute, error, setErrorHandler, loading } = useAuthHelper(
    signup,
    formValidation,
    '/',
  );

  // GraphQLのエラーがあったら、ここでキャッチして、エラー処理を行う。今回は、エラーメッセージを表示するだけ。
  useEffect(() => {
    if (apolloError?.message) setErrorHandler('main', apolloError.message);
  }, [apolloError]);

  return {
    ref: {
      nameRef,
      emailRef,
      passwordRef,
    },
    signup: authExecute,
    error,
    loading,
  };
};
