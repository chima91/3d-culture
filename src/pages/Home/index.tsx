import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import { ObjCard } from "../../components/ObjCard";
import { ModalQR } from "../../components/ModalQR";
import { SNS } from "../../components/SNS";
import useStyles from "./style";

export const Home = () => {
  const styles = useStyles();

  const getRandomYmd = (fromYmd: string, toYmd: string) => {
    let from: any = new Date(fromYmd);
    let to: any = new Date(toYmd);

    let dayDiff: number = (to - from) / (24*60*60*1000);
    let x = Math.floor(Math.random() * (dayDiff+1));

    from.setDate(from.getDate() + x);

    let y = from.getFullYear();
    let m = ("0" + (from.getMonth()+1)).slice(-2);
    let d = ("0" + from.getDate()).slice(-2);

    return `${y}/${m}/${d}`;
  };

  return (
    <Container>
      <ModalQR />
      <SNS />
      <Grid container spacing={2}>
        <Grid item className={styles.underline} component={Link} to="/detail/1" xs={12} md={6} lg={4}>
          <ObjCard imageUrl="/static/thumbnail/dance.jpg" title="踊るハニワ" owner="あいうえ博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/2" xs={12} md={6} lg={4}>
          <ObjCard imageUrl="/static/thumbnail/dog.jpg" title="犬のハニワ" owner="かきくけ博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/3" xs={12} md={6} lg={4}>
          <ObjCard imageUrl="/static/thumbnail/bird.jpg" title="鳥のハニワ" owner="さしすせ博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/4" xs={12} md={6} lg={4}>
          <ObjCard imageUrl="/static/thumbnail/no-image.jpg" title="堀のハニワ" owner="たちつて博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/5" xs={12} md={6} lg={4}>
          <ObjCard imageUrl="/static/thumbnail/cylinder.jpg" title="円筒ハニワ" owner="なにぬね博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/6" xs={12} md={6} lg={4}>
          <ObjCard imageUrl="/static/thumbnail/japaneseSword.jpg" title="日本刀" owner="はひふへほ博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/7" xs={12} md={6} lg={4}>
          <ObjCard imageUrl="/static/thumbnail/horse.jpg" title="馬のハニワ" owner="まみむめ博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/8" xs={12} md={6} lg={4}>
          <ObjCard imageUrl="/static/thumbnail/yayoiDoki.jpg" title="弥生土器" owner="やゆよ博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} />
        </Grid>
      </Grid>
    </Container>
  )
};