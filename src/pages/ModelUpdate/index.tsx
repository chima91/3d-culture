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
import { useEffect, useState, VFC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Head from '../../components/Head';
import { AccountLoaded } from '../../stores/AccountLoaded';
import { GlobalUser } from '../../stores/User';
import { useModelByPkQuery } from '../../utils/graphql/generated';

import useStyles from './style';
import { UpdateForm } from './UpdateForm';
import { UpdateModelSelect } from './UpdateModelSelect';

export const ModelUpdate: VFC = () => {
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

  // URLから表示するモデルのIDを取得
  const { objId } = useParams();
  // IDから表示するモデルを取得
  const { data: currentModel } = useModelByPkQuery({
    variables: {
      id: objId!,
    },
  });

  return (
    <Dialog fullWidth maxWidth='md' open>
      <Head title='3Dモデルの更新' />
      <DialogTitle>
        3Dモデルの更新
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider />
      <DialogContent className={styles.body}>
        {/* アカウントが存在すれば、更新用コンポーネントを表示 */}
        {globalUser?.id ? (
          <Grid container spacing={4}>
            <Grid xs item>
              <UpdateModelSelect
                currentModelUrl={currentModel?.models_by_pk?.model_url}
                currentThumbUrl={currentModel?.models_by_pk?.thumbnail_url}
                modelFile={modelFile}
                thumbFile={thumbFile}
                setModelFile={setModelFile}
                setThumbFile={setThumbFile}
              />
            </Grid>
            <Divider orientation='vertical' flexItem />
            <Grid xs item>
              <UpdateForm modelFile={modelFile} thumbFile={thumbFile} />
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
