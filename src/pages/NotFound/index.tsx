import { Button, Card, Typography } from '@material-ui/core';
import { VFC } from 'react';

import useStyles from '../../assets/SimpleCardStyle';
import Head from '../../components/Head';
import { Logo } from '../../components/Logo';

export const NotFound: VFC = () => {
  const styles = useStyles();

  return (
    <Card className={styles.root} variant='outlined'>
      <Head title='お探しのページは見つかりませんでした。' />
      <div className={`${styles.logo} ${styles.div}`}>
        <Logo />
      </div>

      <Typography className={styles.div} component='h1' variant='h5'>
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
