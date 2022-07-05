import { Button, TextField, Typography } from '@material-ui/core';
import { useEffect, useRef, useState, VFC } from 'react';
import { useRecoilValue } from 'recoil';

import { useAvatarUpload } from '../../../hooks/AvatarUpload';
import { GlobalUser } from '../../../stores/User';
import useStyles from './style';

export type UploadFormProps = {
  avatarFile: File | undefined;
};

export const UploadForm: VFC<UploadFormProps> = ({ avatarFile }) => {
  const styles = useStyles();
  const globalUser = useRecoilValue(GlobalUser);

  const nameRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

  const [errorMessage, setErrorMessage] = useState<Error>();

  // avatarをアップロードするためのHooks
  const { upload, loading, error: uploadError } = useAvatarUpload();

  const submit = () => {
    setErrorMessage(undefined);
    if (!globalUser?.id)
      return setErrorMessage(new Error('ログインしてください。'));
    if (!nameRef.current?.value)
      return setErrorMessage(new Error('名前を入力してください'));
    return upload({
      file: {
        avatar: avatarFile,
      },
      name: nameRef.current.value,
      description: descRef.current?.value,
      userId: globalUser.id,
    });
  };

  // Hooksからのエラーを受け取り、画面表示用のエラーステートに渡す。
  useEffect(() => {
    setErrorMessage(uploadError);
  }, [uploadError]);

  return (
    <>
      <label className={styles.label}>
        <Typography variant='body2'>名前</Typography>
        <TextField
          size='small'
          fullWidth
          variant='outlined'
          inputRef={nameRef}
          defaultValue={globalUser?.name}
        />
      </label>
      <label className={styles.label}>
        <Typography variant='body2'>近況</Typography>
        <TextField
          size='small'
          fullWidth
          multiline
          rows={4}
          variant='outlined'
          inputRef={descRef}
        />
      </label>

      {/* エラーがあれば表示 */}
      {errorMessage?.message && (
        <label className={styles.label}>
          <Typography color='error'>{errorMessage.message}</Typography>
        </label>
      )}

      <div className={styles.button}>
        <Button
          variant='contained'
          color='primary'
          disabled={loading}
          onClick={submit}
        >
          {loading ? '更新中' : 'プロフィールを更新'}
        </Button>
      </div>
    </>
  );
};
