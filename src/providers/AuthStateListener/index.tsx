import { useEffect, FC, ReactNode } from 'react';
import { useSetRecoilState } from 'recoil';

import { AuthCredential } from '../../stores/AuthCredential';
import { AuthCredentialLoaded } from '../../stores/AuthCredentialLoaded';
import { fireAuth } from '../../utils/Firebase/config';

export const AuthStateListener: FC<ReactNode> = ({ children }) => {
  const setCredential = useSetRecoilState(AuthCredential);
  const setLoaded = useSetRecoilState(AuthCredentialLoaded);

  useEffect(() => {
    const unsubscriber = fireAuth.onAuthStateChanged(async (credential) => {
      // uidが存在→つまり認証が済んでいるユーザーであればuidを格納する
      setCredential(credential?.uid || undefined);

      // onAuthStateChangedが呼ばれたのでtrueをセット
      setLoaded(true);
    });

    // これはonAuthStateChangedを停止する用の関数
    // useEffectの返り値に関数を指定すると、ReactはそのuseEffectがアンマウントされた時、つまりコンポーネントが表示されなくなったらreturnに指定された関数を実行します。
    // この場合、AuthStateListenerはProviderとしてアプリケーションのRootで呼んでいるのでアプリケーションを閉じたときに実行される
    return unsubscriber;
  });
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
