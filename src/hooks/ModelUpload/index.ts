import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { storage } from "../../utils/Firebase/config";
import { ModelsDocument, useInsertModelMutation } from "../../utils/graphql/generated";
import { useRecoilValue } from "recoil";
import { GlobalUser } from "../../stores/User";

type UploadProps = {
  file: {
    thumbnail: File;
    model: File;
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
    // `ref`でファイルのパスを指定する。PCのディレクトリと同じ考え方。ref('models/model.glb')とすれば、modelsという階層にmodel.glbを作成する
    // putでファイルのアップロードを実際に行う。`ref`で指定したパスに対して、ファイルの実態をアップロードする
    return storage.ref(`${path}/${id}.${exe}`).put(file);
  };

  const upload = async({ file, title, description, ownerId }: UploadProps) => {
    // ユーザが読み込まれていない、未ログインであれば処理を中断する
    if(!globalUser?.id) return;

    setLoading(true);

    // モデルとサムネイルのファイル名, モデルのメタデータとしてのuuidを生成する
    const modelName = uuidv4();
    const thumbName = uuidv4();
    const modelId = uuidv4();

    // try-catch構文でPromise(アップロード処理)のエラーをキャッチする
    try {
      // モデルのアップロード処理。モデルは全て`models`と言う階層に保存される
      const modelUploadTask = await uploadToStorage(
        modelName,
        file.model,
        "models"
      );
      // 画像サムネイルのアップロード処理。サムネイルは全て`thumbnails`に保存される
      const thumbUploadTask = await uploadToStorage(
        thumbName,
        file.thumbnail,
        "thumbnails"
      );

      // モデルのメタデータをHasura(Heroku??)に保存する
      const res = await mutation({
        variables: {
          id: modelId,
          title,
          description,
          model_url: modelUploadTask.ref.fullPath,
          thumbnail_url: thumbUploadTask.ref.fullPath,
          owner_id: ownerId
        }
      });

      // 全ての処理が終わったら、動画のメタデータを返す。
      return res.data?.insert_models_one;
    } catch(err) {
      console.error(err);
      setError(new Error("エラーが発生しました。最初からやり直してください。"));
    } finally {
      setLoading(false);
    }
  };

  // ApolloClientのエラーをキャッチする
  useEffect(() => {
    if(apolloError) {
      console.error(apolloError);
      setError(new Error("エラーが発生しました。最初からやり直してください。"));
    }
  }, [apolloError]);

  return {
    upload,
    loading,
    error
  }
};