import { Card, CircularProgress, Typography } from '@material-ui/core';
import { useEffect, VFC } from 'react';

import useStyles from '../../assets/AuthenticationCardStyle';
import { useSignout } from '../../hooks/Authentication/useSignout';

export const Signout: VFC = () => {
  const styles = useStyles();
  const { signout } = useSignout();

  useEffect(() => {
    signout();
  });

  return (
    <Card className={styles.root} variant='outlined'>
      <CircularProgress className={styles.div} size={70} thickness={4} />
      <Typography variant='h6'>ログアウト中</Typography>
    </Card>
  );
};
