import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { storage } from '../../utils/Firebase/config';
import {
  UserByIdDocument,
  useUpdateUserMutation,
} from '../../utils/graphql/generated';
import { GlobalUser } from '../../stores/User';

type UploadProps = {
  file: {
    avatar: File | undefined;
  };
  name: string;
  description?: string;
  userId: string;
};

export const useAvatarUpload = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const [mutation, { error: apolloError }] = useUpdateUserMutation({
    refetchQueries: [{ query: UserByIdDocument }],
  });

  // modelのownerIdのために、userのidを取得する
  const globalUser = useRecoilValue(GlobalUser);

  // Firebase Storageにファイルをアップロードする処理
  const uploadStorage = (id: string, file: File | undefined, path: string) => {
    // ファイルから拡張子を抜き出す
    if (file) {
      const exe = file.name.split('.').pop();
      return storage.ref(`${path}/${id}.${exe}`).put(file);
    }
    return null;
  };

  const upload = async ({ file, name, description, userId }: UploadProps) => {
    // ユーザが読み込まれていない、未ログインであれば処理を中断する
    if (!globalUser?.id) return;

    // 処理が始まったらローディング中にする
    setLoading(true);
    // avatarのファイル名はユーザIDとする
    const avatarName = globalUser.id;

    // try-catch構文でPromise(アップロード処理)のエラーをキャッチする
    try {
      // avatarのアップロード処理
      const avatarUploadTask = await uploadStorage(
        avatarName,
        file.avatar,
        'avatars',
      );

      // avatar URLの取得
      let avatarURL = '';
      if (avatarUploadTask) {
        avatarURL = await avatarUploadTask.ref.getDownloadURL();
      } else {
        avatarURL = globalUser.profile_photo_url || '';
      }

      // avatarのメタデータを保存する
      const res = await mutation({
        variables: {
          id: userId,
          name,
          profile_photo_url: avatarURL,
        },
      });

      // 全ての処理が終わったら、avatarのメタデータを返す
      // return res.data?.update_users_by_pk;
    } catch (err) {
      // アップロードの途中でエラーが発生したら、処理を中断して、ここに記述する処理が行われる
      console.error(err);
      setError(new Error('エラーが発生しました。最初からやり直してください。'));
    } finally {
      // 全ての処理が完了したら、ローディングをfalseにする
      setLoading(false);
    }
  };

  // Appollo Clientのエラーをキャッチする
  useEffect(() => {
    if (apolloError) {
      console.error(apolloError);
      setError(new Error('エラーが発生しました。最初からやり直してください。'));
    }
  }, [apolloError]);

  return {
    loading,
    error,
    upload,
  };
};
