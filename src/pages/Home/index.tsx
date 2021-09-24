import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import { ObjCard } from "../../components/ObjCard";
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
      <Grid container spacing={2}>
        <Grid item className={styles.underline} component={Link} to="/detail/1" xs={12} md={6} lg={4}>
          <ObjCard imageUrl="/static/haniwa.jpg" title="踊るハニワ" owner="あいうえ博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/2" xs={12} md={6} lg={4}>
          <ObjCard imageUrl="/static/no-image.jpg" title="踊らないハニワ" owner="かきくけ博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/3" xs={12} md={6} lg={4}>
          <ObjCard imageUrl="/static/haniwa.jpg" title="馬のハニワ" owner="さしすせ博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/4" xs={12} md={6} lg={4}>
          <ObjCard imageUrl="/static/no-image.jpg" title="猪のハニワ" owner="mdg博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/5" xs={12} md={6} lg={4}>
          <ObjCard imageUrl="/static/haniwa.jpg" title="鹿のハニワ" owner="たちつて博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/6" xs={12} md={6} lg={4}>
          <ObjCard imageUrl="/static/haniwa.jpg" title="蝶のハニワ" owner="なにぬね博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/7" xs={12} md={6} lg={4}>
          <ObjCard imageUrl="/static/no-image.jpg" title="蜥蜴のハニワ" owner="まみむめ博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/8" xs={12} md={6} lg={4}>
          <ObjCard imageUrl="/static/haniwa.jpg" title="蟋蟀のハニワ" owner="あかさたな博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} />
        </Grid>
      </Grid>
    </Container>
  )
};