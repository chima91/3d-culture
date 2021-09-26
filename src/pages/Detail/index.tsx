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
          <div className={styles.cardPadding}><ObjHorizontalCard imageUrl="/static/haniwa.jpg" title="馬のハニワ" owner="名古屋大学博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} /></div>
          <div className={styles.cardPadding}><ObjHorizontalCard imageUrl="/static/no-image.jpg" title="踊らないハニワ" owner="たちつて博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} /></div>
          <div className={styles.cardPadding}><ObjHorizontalCard imageUrl="/static/haniwa.jpg" title="鹿のハニワ" owner="やゆよ博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} /></div>
          <div className={styles.cardPadding}><ObjHorizontalCard imageUrl="/static/no-image.jpg" title="鰐のハニワ" owner="わをん博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} /></div>
          <div className={styles.cardPadding}><ObjHorizontalCard imageUrl="/static/haniwa.jpg" title="象のハニワ" owner="さしすせ博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} /></div>
          <div className={styles.cardPadding}><ObjHorizontalCard imageUrl="/static/no-image.jpg" title="鳥のハニワ" owner="はひふへほ博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} /></div>
          <div className={styles.cardPadding}><ObjHorizontalCard imageUrl="/static/haniwa.jpg" title="蝶のハニワ" owner="まみむめ博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} /></div>
        </Grid>
      </Grid>
    </Container>
  );
}
