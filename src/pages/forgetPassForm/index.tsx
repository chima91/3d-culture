import { Button, Card, TextField, Typography } from "@material-ui/core";

import { Logo } from "../../components/Logo";
import useStyles from "../../components/AuthenticationStyle/style";
import { useForgetPass } from "../../hooks/Authentication/useForgetPass";

export const ForgetPassForm = () => {
  const styles = useStyles();
  const { ref, sendEmail, sendSuccess, loading, error } = useForgetPass();

  return (
    <Card className={styles.root} variant="outlined">
      <div className={`${styles.logo} ${styles.margin}`}>
        <Logo />
      </div>

      <Typography className={styles.margin} component="h1" variant="h5">
        パスワードの再発行
      </Typography>

      {error.has("main") && (
        <Typography className={styles.margin} color="error">
          {error.get("main")}
        </Typography>
      )}

      <label className={`${styles.label} ${styles.margin}`}>
        <Typography>メールアドレス</Typography>
        <TextField
          type="email"
          required
          size="small"
          fullWidth
          variant="outlined"
          inputRef={ref.emailRef}
          error={error.has("email")}
          helperText={error.has("email") ? error.get("email") : ""}
        />
      </label>

      {sendSuccess && (
        <Typography className={styles.margin} color="primary">
          ✔︎メールの送信が完了しました。
        </Typography>
      )}

      <div className={styles.margin}>
        <Button variant="contained" color="primary" disabled={loading} onClick={sendEmail}>
          {loading ? "再発行メールを送信中" : "再発行メールを送信する"}
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