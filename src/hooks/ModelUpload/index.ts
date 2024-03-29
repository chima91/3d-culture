import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

import { GlobalUser } from '../../stores/User';
import { storage } from '../../utils/Firebase/config';
import {
  ModelsDocument,
  useInsertModelMutation,
} from '../../utils/graphql/generated';

type UploadProps = {
  file: {
    model: File;
    thumbnail: File;
  };
  title: string;
  description?: string;
  ownerId: string;
};

export const useModelUpload = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  // モデルのメタデータを保存するためのGraphQL mutation
  const [mutation, { error: apolloError }] = useInsertModelMutation({
    // キャッシュの更新を指定
    refetchQueries: [{ query: ModelsDocument }],
  });

  // modelのownerIdのためにuserのidを取得する
  const globalUser = useRecoilValue(GlobalUser);

  // Firebase Storageにファイルをアップロードする処理
  const uploadToStorage = (id: string, file: File, path: string) => {
    // ファイルから拡張子を抜き出す
    const exe = file.name.split('.').pop();
    // ref('models/test.glb')というふうにパスを指定し、put()で実際にファイルのアップロードを行う。
    return storage.ref(`${path}/${id}.${exe}`).put(file);
  };

  const upload = async ({ file, title, description, ownerId }: UploadProps) => {
    // ユーザが読み込まれていない、未ログインであれば処理を中断する
    if (!globalUser?.id) return;

    setLoading(true);

    // モデルファイル名, サムネイルファイル名, modelsテーブルidカラム, のuuidを生成する
    const modelName = uuidv4();
    const thumbName = uuidv4();
    const modelId = uuidv4();

    // try-catch構文でPromise(アップロード処理)のエラーをキャッチする
    try {
      const modelUploadTask = await uploadToStorage(
        modelName,
        file.model,
        'models',
      );
      const thumbUploadTask = await uploadToStorage(
        thumbName,
        file.thumbnail,
        'thumbnails',
      );

      // モデルのメタデータをHasuraを通してHerokuのPostgreSQLに保存する
      const res = await mutation({
        variables: {
          id: modelId,
          title,
          description,
          model_url: modelUploadTask.ref.fullPath,
          thumbnail_url: thumbUploadTask.ref.fullPath,
          owner_id: ownerId,
        },
      });

      // 全ての処理が終わったら、モデルのメタデータを返す。
      // eslint-disable-next-line consistent-return
      return res.data?.insert_models_one;
    } catch (err) {
      setError(new Error('エラーが発生しました。最初からやり直してください。'));
    } finally {
      setLoading(false);
    }
  };

  // ApolloClientのエラーをキャッチする
  useEffect(() => {
    if (apolloError) {
      setError(new Error('エラーが発生しました。最初からやり直してください。'));
    }
  }, [apolloError]);

  return {
    upload,
    loading,
    error,
  };
};
