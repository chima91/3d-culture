import { Button, Typography } from "@material-ui/core";
import { useState, useRef, ChangeEvent, useEffect, Dispatch, SetStateAction } from "react";

import useStyles from "./style";

// ModelSelectコンポーネントのpropsとして、引数を型定義する
export type ModelSelectProps = {
  modelFile: File | undefined;
  thumbFile: File | undefined;
  setModelFile: Dispatch<SetStateAction<File | undefined>>;
  setThumbFile: Dispatch<SetStateAction<File | undefined>>;
};

// 親コンポーネントから、ModelSelectに渡される引数
export const ModelSelect = ({
  modelFile,
  thumbFile,
  setModelFile,
  setThumbFile,
}: ModelSelectProps) => {
  const styles = useStyles();

  // モデルのURLを格納
  const [modelURL, setModelURL] = useState<string>();

  // サムネイルの画像URLを格納
  const [thumbURL, setThumbURL] = useState<string>();

  // ファイルを選択した後に、`setFile`を使用して`file`に選択されたファイルを格納。
  const selectModel = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files?.length) {
      setModelFile(event.currentTarget.files[0]);
    }
  };
  const selectThumb = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files?.length) {
      setThumbFile(event.currentTarget.files[0]);
    }
  };

  const modelRef = useRef<HTMLInputElement>(null);
  const thumbRef = useRef<HTMLInputElement>(null);

  const handleModelClick = () => {
    modelRef.current?.click();
  };
  const handleThumbClick = () => {
    thumbRef.current?.click();
  };

  useEffect(() => {
    // ファイルが空の場合は、実行しない
    if (modelFile) {
      // URL.createObjectURLは、ファイルを引数に受け取り、<video>タグで読み込み可能なローカルURLを生成します。
      // URL.createObjectURLで生成されたURLを<video>のsrcにわたすことでファイルを動画で表示できます。
      const mURL = URL.createObjectURL(modelFile);
      setModelURL(mURL);
    }
  }, [modelFile]);
  useEffect(() => {
    if (thumbFile) {
      const tURL = URL.createObjectURL(thumbFile);
      setThumbURL(tURL);
    }
  }, [thumbFile]);

  return (
    <div className={styles.root}>
      {modelURL && (
        <div className={styles.full}>
          <Typography className={styles.textPadding}>モデルファイル：{modelFile?.name}</Typography>
        </div>
      )}
      {thumbURL && (
        <div className={styles.full}>
          <Typography className={styles.textPadding}>サムネイルファイル：{thumbFile?.name}</Typography>
        </div>
      )}

      {/*
        <input/>の入力値が変更されたら、onChangeが実行されます。
        selectedFileには、onChangeからChangeEvent<HTMLInputElement>という型の引数が渡されます。
      */}
      <input type="file" hidden ref={modelRef} onChange={selectModel} />
      <input type="file" hidden ref={thumbRef} onChange={selectThumb} />

      {!modelURL && (
        <Button variant="contained" color="primary" onClick={handleModelClick}>
          モデルファイルを選択
        </Button>
      )}
      {!thumbURL && (
        <Button variant="contained" color="primary" onClick={handleThumbClick}>
          サムネイルファイルを選択
        </Button>
      )}
    </div>
  );
};