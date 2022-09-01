import { Button, Card, TextField, Typography } from '@material-ui/core';
import { VFC } from 'react';

import useStyles from '../../assets/AuthenticationCardStyle';
import Head from '../../components/Head';
import { Logo } from '../../components/Logo';
import { useForgetPass } from '../../hooks/Authentication/useForgetPass';

export const ForgetPassForm: VFC = () => {
  const styles = useStyles();
  const { ref, sendEmail, sendSuccess, loading, error } = useForgetPass();

  return (
    <Card className={styles.root} variant='outlined'>
      <Head title='パスワードの再発行' />
      <div className={`${styles.logo} ${styles.div}`}>
        <Logo />
      </div>

      <Typography className={styles.div} component='h1' variant='h5'>
        パスワードの再発行
      </Typography>

      {error.has('main') && (
        <Typography className={styles.div} color='error'>
          {error.get('main')}
        </Typography>
      )}

      <label className={`${styles.label} ${styles.div}`}>
        <Typography>メールアドレス</Typography>
        <TextField
          type='email'
          required
          size='small'
          fullWidth
          variant='outlined'
          inputRef={ref.emailRef}
          error={error.has('email')}
          helperText={error.has('email') ? error.get('email') : ''}
        />
      </label>

      {sendSuccess && (
        <Typography className={styles.div} color='primary'>
          ✔︎メールの送信が完了しました。
        </Typography>
      )}

      <div className={styles.div}>
        <Button
          variant='contained'
          color='primary'
          disabled={loading}
          onClick={sendEmail}
        >
          {loading ? '再発行メールを送信中' : '再発行メールを送信する'}
        </Button>
      </div>

      <div>
        <Button href='/login' color='primary'>
          ログインはこちら
        </Button>
      </div>
    </Card>
  );
};
