import { Dialog, DialogContent, DialogTitle, Divider, IconButton, Grid, CircularProgress } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { AccountLoaded } from '../../stores/AccountLoaded';
import { GlobalUser } from '../../stores/User';
import { AvatarSelect } from './AvatarSelect';
import { UploadForm } from './UploadForm';
import useStyles from './style';

export const Profile = () => {
  const styles = useStyles();

  // recoilの値を使用
  const accountLoaded = useRecoilValue(AccountLoaded);
  const globalUser = useRecoilValue(GlobalUser);

  // ファイル管理用ローカルステート
  const [avatarFile, setAvatarFile] = useState<File>();

  // react-router-domを使用する
  const navigate = useNavigate();

  // アカウントが読み込まれていない、未ログインであれば /login へリダイレクト
  useEffect(() => {
    if (accountLoaded) {
      if (!globalUser?.id) {
        navigate("/login");
      }
    }
  }, [accountLoaded, globalUser?.id]);

  // Dialogクローズ用
  const [open, setOpen] = useState<boolean>(true);
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  return (
    <Dialog fullWidth={true} maxWidth="md" open={open} onClose={handleClose} >
      <DialogTitle>
        プロフィール
        <IconButton className={styles.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Divider />

      <DialogContent className={styles.body}>
        {/* アカウントが存在すれば、アップロードコンポーネントを表示 */}
        {globalUser?.id ? (
          <Grid container spacing={4}>
            <Grid xs item>
              {/* ステートをpropsとして渡す */}
              <AvatarSelect
                currentAvatarUrl={globalUser.profile_photo_url||undefined}
                avatarFile={avatarFile}
                setAvatarFile={setAvatarFile}
              />
            </Grid>
            <Divider orientation='vertical' flexItem />
            <Grid xs item>
              {/* ステートをpropsとして渡す */}
              <UploadForm avatarFile={avatarFile} />
            </Grid>
          </Grid>
        ) : (
          // アカウントが存在しなければ、ローディングコンポーネントを表示
          <Grid container justifyContent="center">
            <CircularProgress size={50} />
          </Grid>
        )}
      </DialogContent>
    </Dialog>
  );
};