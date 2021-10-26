import { Button, TextField, Typography } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";

import { useModelUpload } from "../../../hooks/ModelUpload";
import { GlobalUser } from "../../../stores/User";
import useStyles from "./style";

export type UploadFormProps = {
  modelFile: File | undefined;
  thumbFile: File | undefined;
};

export const UploadForm = ({ modelFile, thumbFile }: UploadFormProps) => {
  const styles = useStyles();

  // リダイレクト用関数
  const navigate = useNavigate();

  // モデルをアップロードする際の、ownerIdのためのuserId
  const globalUser = useRecoilValue(GlobalUser);

  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

  // エラーを表示する用のステート
  const [errorMessage, setErrorMessage] = useState<Error>();

  // 動画をアップロードするためのHooks
  const { upload, loading, error: uploadError } = useModelUpload();

  // 「動画をアップロード」ボタンをクリックしたら実行する関数
  const submit = () => {
    setErrorMessage(undefined);

    if (!globalUser?.id) {
      return setErrorMessage(new Error("ログインしてください。"));
    }

    if (!modelFile || !thumbFile) {
      return setErrorMessage(new Error("ファイルを選択してください。"));
    }

    if (!titleRef.current?.value) {
      return setErrorMessage(new Error("タイトルを入力してください。"));
    }

    upload({
      file: {
        model: modelFile,
        thumbnail: thumbFile,
      },
      title: titleRef.current.value,
      description: descRef.current?.value,
      ownerId: globalUser.id,
    }).then((data) => {
      // 動画のアップロードが成功すれば、`home`URLにリダイレクト
      if (data?.id) {
        navigate("/");
      }
    });
  };

  // Hooksからのエラーを受け取り、画面表示用のエラーステートに渡す。
  useEffect(() => {
    setErrorMessage(uploadError);
  }, [uploadError]);

  return (
    <>
      <label className={styles.label}>
        <Typography variant="body2">タイトル</Typography>
        <TextField
          size="small"
          fullWidth
          variant="outlined"
          inputRef={titleRef}
        />
      </label>

      <label className={styles.label}>
        <Typography variant="body2">説明</Typography>
        <TextField
          size="small"
          fullWidth
          variant="outlined"
          multiline
          rows={4}
          inputRef={descRef}
        />
      </label>

      {
        // エラーがあれば表示
        errorMessage?.message && (
          <label className={styles.label}>
            <Typography color="error">{errorMessage.message}</Typography>
          </label>
        )
      }

      <div className={styles.button}>
        <Button
          variant="contained"
          color="primary"
          disabled={loading}
          onClick={submit}
        >
          {loading ? "アップロード中" : "モデル・サムネイルをアップロード"}
        </Button>
      </div>
    </>
  );
};