import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";

import { signup as FireSignup } from "../../../utils/Firebase/signup";
import { FireSignupType } from "../../../utils/Firebase/signup";
import { useInsertUserMutation } from "../../../utils/graphql/generated";
import { SetErrorFn, useAuthHelper } from "../useAuthHelper";
import { GlobalUser } from "../../../stores/User";
import { checkAuthToken } from "./checkAuthToken";

export type SignupPropsType = {
  name: string;
} & FireSignupType;

export const useSignup = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  // mutationで作成するデータをグローバルステートに格納
  const setGlobalUser = useSetRecoilState(GlobalUser);

  const [ insertMutation, { error: apolloError } ] = useInsertUserMutation();

  const formValidation = (setError: SetErrorFn) => {
    let invalidValidation = false;

    // 今回はシンプルにするために、入力が空でないかだけ確認する
    if (!nameRef.current?.value) {
      setError("name", "名前を入力してください。");
      invalidValidation = true;
    }
    if (!emailRef.current?.value) {
      setError("email", "メールアドレスを入力してください。");
      invalidValidation = true;
    }
    if (!passwordRef.current?.value) {
      setError("password", "パスワードを入力してください。");
      invalidValidation = true;
    }

    return invalidValidation;
  }

  const signup = async () => {
    const { user } = await FireSignup({
      email: emailRef.current?.value || "",
      password: passwordRef.current?.value || ""
    });
    if(!user?.uid) throw new Error("ユーザー登録に失敗しました。");

    // アカウントにトークンが設定されるまで待機
    await checkAuthToken(user.uid);

    // Hasuraにuserを作成する
    const apolloResponse = await insertMutation({
      variables: {
        id: user.uid,
        name: nameRef.current?.value || "",
        email: emailRef.current?.value || ""
      }
    });
    if(apolloResponse.data?.insert_users_one?.id) {
      // GraphQLでデータが作成された後に確実にデータをグローバルステートに格納する
      setGlobalUser(apolloResponse.data?.insert_users_one);
      navigate("/")
    } else {
      throw new Error("ユーザー登録に失敗しました。")
    }
  };

  // useAuthHelperを使用して、実際に認証に使用する関数を生成する
  const { authExecute, setErrorHandler, error, loading, } = useAuthHelper(
    signup,
    formValidation
  );

  // GraphQLのエラーがあったら、ここでキャッチして、エラー処理を行う
  // 今回は、エラーメッセージを表示するだけ。
  useEffect(() => {
    if(apolloError?.message) {
      setErrorHandler("main", apolloError.message);
    }
  // eslint-disable-next-line
  }, [apolloError]);

  return {
    ref: {
      nameRef,
      emailRef,
      passwordRef
    },
    signup: authExecute,
    error,
    loading
  }
}

