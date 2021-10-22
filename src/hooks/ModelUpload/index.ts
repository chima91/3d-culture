import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { storage } from "../../utils/Firebase/config";

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

  // Firebase Storageにファイルをアップロードする処理
  const uploadToStorage = (id: string, file: File, path: string) => {
    // ファイルから拡張子を抜き出す
    const exe = file.name.split('.').pop();
    // `ref`でファイルのパスを指定する。PCのディレクトリと同じ考え方。ref('models/model.glb')とすれば、modelsという階層にmodel.glbを作成する
    // putでファイルのアップロードを実際に行う。`ref`で指定したパスに対して、ファイルの実態をアップロードする
    return storage.ref(`${path}/${id}.${exe}`).put(file);
  };

  const upload = async({ file, title, description, ownerId }: UploadProps) => {
    setLoading(true);

    // モデルとサムネイルのそれぞれのuuidを生成する
    const modelName = uuidv4();
    const thumbName = uuidv4();

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
    } catch(err) {
      console.error(err);
      setError(new Error("エラーが発生しました。最初からやり直してください。"));
    } finally {
      setLoading(false);
    }
  };

  return {
    upload,
    loading,
    error
  }
};