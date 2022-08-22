import { Button, Card, Typography } from '@material-ui/core';
import { VFC } from 'react';

import { Logo } from '../../components/Logo';
import useStyles from '../../assets/SimpleCardStyle';
import Head from '../../components/Head';

export const About: VFC = () => {
  const styles = useStyles();

  return (
    <Card className={styles.root} variant='outlined'>
      <Head title='3dimenculとは' />
      <div className={`${styles.logo} ${styles.div}`}>
        <Logo />
      </div>

      <Typography className={styles.div} component='h1' variant='h5'>
        3dimenculとは
      </Typography>

      <Typography className={styles.div} component='p' variant='body1'>
        3dimencul（スリーディメンカル）は名古屋大学で開発中の文化財3Dデータ閲覧用Webアプリです。
        <br />
        3dimenculを使うことで、全国各地の博物館・美術館が所有する文化財の3Dデータを横断的に鑑賞することができます。
        <br />
        これまでも文化財3Dデータの閲覧アプリは数多く作られてきましたが、自治体や博物館施設が独自に作成することが多く、関連する作品や資料を横断的に見ていくことができませんでした。
        <br />
        施設ごとに異なる鑑賞用アプリをダウンロードする必要もあり、利便性の点にも問題があったと言えます。
        <br />
        そこで3dimenculでは、文化財3Dデータの統合された鑑賞用プラットフォームとして、自治体や博物館施設の垣根を越えて、気軽に作品を楽しめる環境の構築を目指します。
        <br />
        さらに、あらゆる人々に開かれた、使いやすくて見やすい、そして思わず作品を共有したくなるようなサービスを展開し、文化財の新しい楽しみ方を提供していきます。
      </Typography>

      <Button href='/' color='primary'>
        トップページへ戻る
      </Button>
    </Card>
  );
};
