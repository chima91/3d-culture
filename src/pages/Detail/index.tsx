import { Container, Grid } from "@material-ui/core";

import { CanvasArea } from "./CanvasArea";
import { ObjHorizontalCard } from "../../components/ObjHorizontalCard";
import { ModalQR } from "../../components/ModalQR";
import useStyles from "./style";

export const Detail = () => {
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
    <Container className={styles.root}>
      <ModalQR />
      <Grid container spacing={4}>
        <Grid item xs={12} lg={8}>
          <CanvasArea />
        </Grid>
        <Grid item xs={12} lg={4}>
          <div className={styles.cardPadding}><ObjHorizontalCard imageUrl="/static/thumbnail/dance.jpg" title="踊るハニワ" owner="あいうえ博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} /></div>
          <div className={styles.cardPadding}><ObjHorizontalCard imageUrl="/static/thumbnail/dog.jpg" title="犬のハニワ" owner="かきくけ博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} /></div>
          <div className={styles.cardPadding}><ObjHorizontalCard imageUrl="/static/thumbnail/bird.jpg" title="鳥のハニワ" owner="さしすせ博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} /></div>
          <div className={styles.cardPadding}><ObjHorizontalCard imageUrl="/static/thumbnail/no-image.jpg" title="堀のハニワ" owner="たちつて博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} /></div>
          <div className={styles.cardPadding}><ObjHorizontalCard imageUrl="/static/thumbnail/cylinder.jpg" title="円筒ハニワ" owner="なにぬね博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} /></div>
          <div className={styles.cardPadding}><ObjHorizontalCard imageUrl="/static/thumbnail/japaneseSword.jpg" title="日本刀" owner="はひふへほ博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} /></div>
          <div className={styles.cardPadding}><ObjHorizontalCard imageUrl="/static/thumbnail/horse.jpg" title="馬のハニワ" owner="まみむめ博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} /></div>
        </Grid>
      </Grid>
    </Container>
  );
}
