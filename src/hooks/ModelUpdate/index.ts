import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useRecoilValue } from 'recoil';
import { storage } from '../../utils/Firebase/config';
import {
  ModelsDocument,
  useUpdateModelMutation,
} from '../../utils/graphql/generated';
import { GlobalUser } from '../../stores/User';

type UploadProps = {
  modelId: string;
  file: {
    model: File;
    thumbnail: File;
  };
  title: string;
  description?: string;
};

export const useModelUpdate = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  // モデルのメタデータを更新するためのGraphQL mutation
  const [mutation, { error: apolloError }] = useUpdateModelMutation({
    // キャッシュの更新を指定
    refetchQueries: [{ query: ModelsDocument }],
  });

  const globalUser = useRecoilValue(GlobalUser);

  // Firebase Storageにファイルをアップロードする処理
  const uploadToStorage = (id: string, file: File, path: string) => {
    // ファイルから拡張子を抜き出す
    const exe = file.name.split('.').pop();
    // ref('models/test.glb')というふうにパスを指定し、put()で実際にファイルのアップロードを行う。
    return storage.ref(`${path}/${id}.${exe}`).put(file);
  };

  const upload = async ({ modelId, file, title, description }: UploadProps) => {
    // ユーザが読み込まれていない、未ログインであれば処理を中断する
    if (!globalUser?.id) return;

    setLoading(true);

    // モデルファイル名, サムネイルファイル名, modelsテーブルidカラム, のuuidを生成する
    const modelName = uuidv4();
    const thumbName = uuidv4();

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
        },
      });

      // 全ての処理が終わったら、モデルのメタデータを返す。
      return res.data?.update_models_by_pk;
    } catch (err) {
      console.error(err);
      setError(new Error('エラーが発生しました。最初からやり直してください。'));
    } finally {
      setLoading(false);
    }
  };

  // ApolloClientのエラーをキャッチする
  useEffect(() => {
    if (apolloError) {
      console.error(apolloError);
      setError(new Error('エラーが発生しました。最初からやり直してください。'));
    }
  }, [apolloError]);

  return {
    upload,
    loading,
    error,
  };
};
