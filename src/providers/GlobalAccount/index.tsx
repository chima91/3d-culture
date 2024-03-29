import { useEffect, FC, ReactNode } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { AccountLoaded } from '../../stores/AccountLoaded';
import { AuthCredential } from '../../stores/AuthCredential';
import { AuthCredentialLoaded } from '../../stores/AuthCredentialLoaded';
import { GlobalUser } from '../../stores/User';
import { useUserByIdLazyQuery } from '../../utils/graphql/generated';

export const GlobalAccount: FC<ReactNode> = ({ children }) => {
  // ユーザー情報取得用のQuery関数
  const [
    userQuery,
    { data: apolloData, error: apolloError, loading: apolloLoading },
  ] = useUserByIdLazyQuery();

  // Recoilのユーザー情報の「Atom」とAuthenticationの「Atom」
  const [globalUser, setGlobalUser] = useRecoilState(GlobalUser);
  const credential = useRecoilValue(AuthCredential);
  const authLoaded = useRecoilValue(AuthCredentialLoaded);

  // Accountのローディング状態を管理
  const setAccountLoaded = useSetRecoilState(AccountLoaded);

  useEffect(() => {
    // Authenticationのローディング終わっており
    if (authLoaded) {
      // credentialにIDが格納されており
      if (credential) {
        // Apollo Clientがローディング中で、ユーザー情報を未取得であれば
        if (!apolloLoading && !globalUser?.id) {
          // ユーザー情報の取得開始
          setAccountLoaded(false);
          userQuery({ variables: { id: credential } });
        }
      } else if (globalUser?.id) {
        setGlobalUser(undefined);
      }
    }
  }, [credential, authLoaded]);

  useEffect(() => {
    // onAuthStateChangedのロードが終了したタイミングで、
    // ユーザー情報が取れていれば、Recoilを更新し、
    // 取れていなければ、Recoilをundefinedにする
    if (authLoaded && !apolloLoading) {
      // Credentialにidが格納されていなければデータは格納できない。
      if (apolloData?.users_by_pk?.id && credential) {
        setGlobalUser(apolloData.users_by_pk);
      } else if (globalUser?.id) {
        setGlobalUser(undefined);
      }
      // Accountのローディングを完了
      setAccountLoaded(true);
    }
  }, [authLoaded, apolloData]);

  useEffect(() => {
    // GraphQLからのエラーがあった場合は、Recoilをudefinedで更新する。
    if (apolloError?.message) {
      setGlobalUser(undefined);
    }
  }, [apolloError]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
