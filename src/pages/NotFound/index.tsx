import { Button, Card, Typography } from '@material-ui/core';
import { VFC } from 'react';

import { Logo } from '../../components/Logo';
import useStyles from '../../components/AuthenticationStyle/style';
import Head from '../../components/Head';

export const NotFound: VFC = () => {
  const styles = useStyles();

  return (
    <Card className={styles.root} variant='outlined'>
      <Head title='お探しのページは見つかりませんでした。' />
      <div className={`${styles.logo} ${styles.margin}`}>
        <Logo />
      </div>

      <Typography className={styles.margin} component='h1' variant='h5'>
        お探しのページは見つかりませんでした。
      </Typography>

      <div>
        <Button href='/' color='primary'>
          トップページへ戻る
        </Button>
      </div>
    </Card>
  );
};
