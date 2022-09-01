import { Button, Card, TextField, Typography } from '@material-ui/core';
import { VFC } from 'react';

import useStyles from '../../assets/AuthenticationCardStyle';
import Head from '../../components/Head';
import { Logo } from '../../components/Logo';
import { useSignup } from '../../hooks/Authentication/useSignup';

export const Signup: VFC = () => {
  const styles = useStyles();

  const { ref, error, loading, signup } = useSignup();

  return (
    <Card className={styles.root} variant='outlined'>
      <Head title='新規アカウント登録' />
      <div className={`${styles.logo} ${styles.div}`}>
        <Logo />
      </div>

      <Typography className={styles.div} component='h1' variant='h5'>
        新規アカウント登録
      </Typography>

      {/*
        エラーメッセージを表示
        ErrorをMapで管理しているので、簡単にエラーがあるかどうかを確認できる
      */}
      {error.has('main') && (
        <Typography className={styles.div} color='error'>
          {error.get('main')}
        </Typography>
      )}

      <label className={`${styles.label} ${styles.div}`}>
        <Typography>名前</Typography>
        <TextField
          required
          size='small'
          fullWidth
          variant='outlined'
          inputRef={ref.nameRef}
          error={error.has('name')}
          helperText={error.has('name') ? error.get('name') : ''}
        />
      </label>

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
          onClick={signup}
        >
          {loading ? '新規作成中' : '新規作成する'}
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
