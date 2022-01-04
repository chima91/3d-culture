import { Button, CardMedia } from "@material-ui/core";
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import useStyles from './style';

export type AvatarSelectProps = {
  currentAvatarUrl: string | undefined;
  avatarFile: File | undefined;
  setAvatarFile: Dispatch<SetStateAction<File | undefined>>;
};

export const AvatarSelect = ({currentAvatarUrl, avatarFile, setAvatarFile}: AvatarSelectProps) => {
  const styles = useStyles();

  // 画像表示用のURLを格納。URLは文字列 == string型
  const [avatarURL, setAvatarURL] = useState<string>(currentAvatarUrl || "");

  // ユーザがファイルを選択したら、`setAvatarFile`を使用して`avatarFile`に選択されたファイルを格納する。
  const selectedFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.length) setAvatarFile(e.currentTarget.files[0]);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  useEffect(() => {
    // ファイルが空の場合は、実行しない
    if (avatarFile) {
      const avatarURL = URL.createObjectURL(avatarFile);
      setAvatarURL(avatarURL);
    }
  }, [avatarFile]);

  return (
    <div className={styles.root}>
      {avatarURL && (
        <div className={styles.full}>
          <CardMedia component="img" src={avatarURL || ""} className={styles.avatarFigure} />
        </div>
      )}
      <div className={styles.button}>
        <input type="file" hidden ref={inputRef} onChange={selectedFile} />
        <Button variant="contained" color="primary" onClick={handleClick}>
          画像を選択
        </Button>
      </div>
    </div>
  );
};