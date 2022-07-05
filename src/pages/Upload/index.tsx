import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Divider,
  CircularProgress,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useRecoilValue } from 'recoil';
import { useEffect, useState, VFC } from 'react';
import { useNavigate } from 'react-router-dom';

import { UploadForm } from './UploadForm';
import { ModelSelect } from './ModelSelect';
import useStyles from './style';
import { AccountLoaded } from '../../stores/AccountLoaded';
import { GlobalUser } from '../../stores/User';

export const Upload: VFC = () => {
  const styles = useStyles();

  const accountLoaded = useRecoilValue(AccountLoaded);
  const globalUser = useRecoilValue(GlobalUser);

  const [modelFile, setModelFile] = useState<File>();
  const [thumbFile, setThumbFile] = useState<File>();

  const navigate = useNavigate();

  // Dialogクローズ用
  const [, setOpen] = useState<boolean>(true);
  const handleClose = () => {
    setOpen(false);
    navigate('/');
  };

  // アカウントが読み込まれていない、未ログインであれば`/login`へリダレクト
  useEffect(() => {
    if (accountLoaded) {
      if (!globalUser?.id) {
        navigate('/login');
      }
    }
  }, [accountLoaded, globalUser?.id]);

  return (
    <Dialog fullWidth maxWidth='md' open>
      <DialogTitle>
        3Dモデルのアップロード
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
              <ModelSelect
                modelFile={modelFile}
                thumbFile={thumbFile}
                setModelFile={setModelFile}
                setThumbFile={setThumbFile}
              />
            </Grid>
            <Divider orientation='vertical' flexItem />
            <Grid xs item>
              <UploadForm modelFile={modelFile} thumbFile={thumbFile} />
            </Grid>
          </Grid>
        ) : (
          // ローディングコンポーネント表示
          <Grid container justifyContent='center'>
            <CircularProgress size={50} />
          </Grid>
        )}
      </DialogContent>
    </Dialog>
  );
};
