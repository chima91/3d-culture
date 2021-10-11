import { Button, Card, TextField, Typography } from "@material-ui/core";

import { Logo } from "../../components/Logo";
import useStyles from "./style";

export const Signup = () => {
  const styles = useStyles();

  return (
    <Card className={styles.root} variant="outlined">
      <div className={`${styles.logo} ${styles.margin}`}>
        <Logo />
      </div>

      <Typography className={styles.margin} component="h1" variant="h5">
        新規アカウント登録
      </Typography>

      <label className={`${styles.label} ${styles.margin}`}>
        <Typography>名前</Typography>
        <TextField required size="small" fullWidth variant="outlined" />
      </label>

      <label className={`${styles.label} ${styles.margin}`}>
        <Typography>メールアドレス</Typography>
        <TextField
          type="email"
          required
          size="small"
          fullWidth
          variant="outlined"
        />
      </label>

      <label className={`${styles.label} ${styles.margin}`}>
        <Typography>パスワード</Typography>
        <TextField
          type="password"
          required
          size="small"
          fullWidth
          variant="outlined"
        />
      </label>

      <div className={styles.margin}>
        <Button variant="contained" color="primary">
          新規作成
        </Button>
      </div>

      <div>
        <Button href="/login" color="primary">
          ログインはこちら
        </Button>
      </div>
    </Card>
  );
};