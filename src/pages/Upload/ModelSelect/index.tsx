import { Button, CardMedia, Divider, Typography } from '@material-ui/core';
import {
  useState,
  useRef,
  ChangeEvent,
  useEffect,
  Dispatch,
  SetStateAction,
  VFC,
} from 'react';

import useStyles from './style';

export type ModelSelectProps = {
  modelFile: File | undefined;
  thumbFile: File | undefined;
  setModelFile: Dispatch<SetStateAction<File | undefined>>;
  setThumbFile: Dispatch<SetStateAction<File | undefined>>;
};

export const ModelSelect: VFC<ModelSelectProps> = ({
  modelFile,
  thumbFile,
  setModelFile,
  setThumbFile,
}) => {
  const styles = useStyles();

  // モデルのURLを格納
  const [modelURL, setModelURL] = useState<string>();

  // サムネイルの画像URLを格納
  const [thumbURL, setThumbURL] = useState<string>();

  // ファイルを選択した後に、setModelFile, setThumbFileを使用し、選択されたファイルをmodelFile, ThumbFileに格納。
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

  // 現状(2022/1/22)、modelURL, thumbURLは使われていない。
  useEffect(() => {
    // ファイルが空の場合は、実行しない
    if (modelFile) {
      // URL.createObjectURL()静的メソッドは、ファイルを引数に受け取り、ファイルを表すローカルURLを生成する。
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
        <div>
          <Typography className={styles.textPadding}>
            モデルファイル：{modelFile?.name}
          </Typography>
        </div>
      )}
      <div className={styles.button}>
        <Button variant='contained' color='primary' onClick={handleModelClick}>
          モデルファイルを選択
        </Button>
      </div>

      <Divider />

      {thumbURL && (
        <div>
          <Typography className={styles.textPadding}>
            サムネイルファイル：{thumbFile?.name}
          </Typography>
          <CardMedia className={styles.thumbnail} image={thumbURL} />
        </div>
      )}
      <div className={styles.button}>
        <Button variant='contained' color='primary' onClick={handleThumbClick}>
          サムネイルファイルを選択
        </Button>
      </div>

      {/* selectModel, selectThumbには、onChangeからChangeEvent<HTMLInputElement>という型の引数が渡される。 */}
      <input type='file' hidden ref={modelRef} onChange={selectModel} />
      <input type='file' hidden ref={thumbRef} onChange={selectThumb} />
    </div>
  );
};
