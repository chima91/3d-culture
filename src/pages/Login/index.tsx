import { Button, Card, TextField, Typography } from '@material-ui/core';
import { VFC } from 'react';

import useStyles from '../../assets/AuthenticationCardStyle';
import Head from '../../components/Head';
import { Logo } from '../../components/Logo';
import { useLogin } from '../../hooks/Authentication/useLogin';

export const Login: VFC = () => {
  const styles = useStyles();
  const { ref, error, loading, login } = useLogin();

  return (
    <Card className={styles.root} variant='outlined'>
      <Head title='ログイン' />
      <div className={`${styles.logo} ${styles.div}`}>
        <Logo />
      </div>

      <Typography className={styles.div} component='h1' variant='h5'>
        ログイン
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

      <label className={`${styles.label} ${styles.div}`}>
        <Typography>パスワード</Typography>
        <TextField
          type='password'
          required
          size='small'
          fullWidth
          variant='outlined'
          inputRef={ref.passwordRef}
          error={error.has('password')}
          helperText={error.has('password') ? error.get('password') : ''}
        />
      </label>

      <div className={styles.div}>
        <Button
          variant='contained'
          color='primary'
          disabled={loading}
          onClick={login}
        >
          {loading ? 'ログイン中' : 'ログインする'}
        </Button>
      </div>

      <div>
        <Button href='/signup' color='primary'>
          アカウント作成はこちら
        </Button>
      </div>

      <div>
        <Button href='/forget' color='primary'>
          パスワードを忘れた場合はこちら
        </Button>
      </div>
    </Card>
  );
};
