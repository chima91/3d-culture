import { Dialog, DialogTitle, DialogContent, Grid, Divider, CircularProgress }  from "@material-ui/core";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UploadForm } from "./UploadForm";
import { ModelSelect } from "./ModelSelect";
import useStyles from "./style";
import { AccountLoaded } from "../../stores/AccountLoaded";
import { GlobalUser } from "../../stores/User";

export const Upload = () => {
  const styles = useStyles();

  const accountLoaded = useRecoilValue(AccountLoaded);
  const globalUser = useRecoilValue(GlobalUser);

  const [ modelFile, setModelFile ] = useState<File>();
  const [ thumbFile, setThumbFile ] = useState<File>();

  const navigate = useNavigate();

  // debug
  console.log('accountLoaded(Upload page):', accountLoaded);
  console.log('globalUser(Upload page):', globalUser);

  // アカウントが読み込まれていない、未ログインであれば`/login`へリダレクト
  useEffect(() => {
    if (accountLoaded) {
      if (!globalUser?.id) {
        navigate("/login");
      }
    }
  }, [accountLoaded, globalUser?.id]);

  return (
    <Dialog fullWidth={true} maxWidth="md" open={true}>
      <DialogTitle>3Dモデルのアップロード</DialogTitle>
      <Divider />
      <DialogContent className={styles.body}>
        {/* アカウントが存在すれば、アップロードコンポーネントを表示 */}
        {globalUser?.id ? (
          <Grid container spacing={4}>
            <Grid xs item>
              <ModelSelect modelFile={modelFile} thumbFile={thumbFile} setModelFile={setModelFile} setThumbFile={setThumbFile} />
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid xs item>
              <UploadForm  modelFile={modelFile} thumbFile={thumbFile} />
            </Grid>
          </Grid>
        ) : (
          // ローディングコンポーネント表示
          <Grid container justifyContent="center">
            <CircularProgress size={50} />
          </Grid>
        )}
      </DialogContent>
    </Dialog>
  );
};