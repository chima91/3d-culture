import { Button, Card, TextField, Typography } from "@material-ui/core";

import { Logo } from "../../components/Logo";
import useStyles from "./style";

export const Login = () => {
  const styles = useStyles();

  return (
    <Card className={styles.root} variant="outlined">
      <div className={`${styles.logo} ${styles.margin}`}>
        <Logo />
      </div>

      <Typography className={styles.margin} component="h1" variant="h5">
        ログイン
      </Typography>

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
          ログイン
        </Button>
      </div>

      <div>
        <Button href="/signup" color="primary">
          アカウント作成はこちら
        </Button>
      </div>

      <div>
        <Button href="/forget" color="primary">
          パスワードを忘れた場合はこちら
        </Button>
      </div>
    </Card>
  )
}