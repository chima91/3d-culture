import { Container, Grid } from "@material-ui/core";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

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

  let { objId } = useParams();
  let GLBSOURCE, TITLE, CREATED, OWNER, DESCRIPTION;
  switch(objId) {
    case '2':
      GLBSOURCE = '/static/glb/testA.glb';
      TITLE = '犬のハニワ';
      CREATED = new Date();
      OWNER = 'かきくけ博物館';
      DESCRIPTION = '「犬のハニワ」の説明文が入ります。。';
      break;
    case '3':
      GLBSOURCE = '/static/glb/testB.glb';
      TITLE = '鳥のハニワ';
      CREATED = new Date();
      OWNER = 'さしすせ博物館';
      DESCRIPTION = '「鳥のハニワ」の説明文が入ります。。';
      break;
    case '4':
      GLBSOURCE = '/static/glb/testC.glb';
      TITLE = '堀のハニワ';
      CREATED = new Date();
      OWNER = 'たちつて博物館';
      DESCRIPTION = '「堀のハニワ」の説明文が入ります。。';
      break;
    case '5':
      GLBSOURCE = '/static/glb/testD.glb';
      TITLE = '円筒ハニワ';
      CREATED = new Date();
      OWNER = 'なにぬね博物館';
      DESCRIPTION = '「円筒ハニワ」の説明文が入ります。。';
      break;
    case '6':
      GLBSOURCE = '/static/glb/testE.glb';
      TITLE = '日本刀';
      CREATED = new Date();
      OWNER = 'はひふへほ博物館';
      DESCRIPTION = '「日本刀」の説明文が入ります。。';
      break;
    case '7':
      GLBSOURCE = '/static/glb/testF.glb';
      TITLE = '馬のハニワ';
      CREATED = new Date();
      OWNER = 'まみむめ博物館';
      DESCRIPTION = '「馬のハニワ」の説明文が入ります。。';
      break;
    case '8':
      GLBSOURCE = '/static/glb/ship.glb';
      TITLE = '弥生土器';
      CREATED = new Date();
      OWNER = 'やゆよ博物館';
      DESCRIPTION = '「弥生土器」の説明文が入ります。。';
      break;
    default:
      GLBSOURCE = '/static/glb/burger.glb';
      TITLE = '踊るハニワ';
      CREATED = new Date();
      OWNER = 'あいうえ博物館';
      DESCRIPTION = '「踊るハニワ」の説明文が入ります。。';
  };

  return (
    <Container className={styles.root}>
      <ModalQR />
      <Grid container spacing={4}>
        <Grid item xs={12} lg={8}>
          <CanvasArea glbSource={GLBSOURCE} title={TITLE} created={CREATED} owner={OWNER} description={DESCRIPTION} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <div className={styles.cardPadding}><Link to='/detail/1' style={{ textDecoration: 'none'}}><ObjHorizontalCard imageUrl="/static/thumbnail/dance.jpg" title="踊るハニワ" owner="あいうえ博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} /></Link></div>
          <div className={styles.cardPadding}><Link to='/detail/2' style={{ textDecoration: 'none'}}><ObjHorizontalCard imageUrl="/static/thumbnail/dog.jpg" title="犬のハニワ" owner="かきくけ博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} /></Link></div>
          <div className={styles.cardPadding}><Link to='/detail/3' style={{ textDecoration: 'none'}}><ObjHorizontalCard imageUrl="/static/thumbnail/bird.jpg" title="鳥のハニワ" owner="さしすせ博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} /></Link></div>
          <div className={styles.cardPadding}><Link to='/detail/4' style={{ textDecoration: 'none'}}><ObjHorizontalCard imageUrl="/static/thumbnail/no-image.jpg" title="堀のハニワ" owner="たちつて博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} /></Link></div>
          <div className={styles.cardPadding}><Link to='/detail/5' style={{ textDecoration: 'none'}}><ObjHorizontalCard imageUrl="/static/thumbnail/cylinder.jpg" title="円筒ハニワ" owner="なにぬね博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} /></Link></div>
          <div className={styles.cardPadding}><Link to='/detail/6' style={{ textDecoration: 'none'}}><ObjHorizontalCard imageUrl="/static/thumbnail/japaneseSword.jpg" title="日本刀" owner="はひふへほ博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} /></Link></div>
          <div className={styles.cardPadding}><Link to='/detail/7' style={{ textDecoration: 'none'}}><ObjHorizontalCard imageUrl="/static/thumbnail/horse.jpg" title="馬のハニワ" owner="まみむめ博物館" created={new Date(getRandomYmd('2021/01/01', '2021/12/31'))} /></Link></div>
        </Grid>
      </Grid>
    </Container>
  );
}
