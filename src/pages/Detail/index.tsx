import { Container, Grid } from "@material-ui/core";
import { ObjHorizontalCard } from "../../components/ObjHorizontalCard";

import { CanvasArea } from "./CanvasArea";
import useStyles from "./style";

export const Detail = () => {
  const styles = useStyles();

  return (
    <Container className={styles.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={8}>
          <CanvasArea />
        </Grid>
        <Grid item xs={12} lg={4}>
          <div className={styles.cardPadding}><ObjHorizontalCard /></div>
          <div className={styles.cardPadding}><ObjHorizontalCard /></div>
          <div className={styles.cardPadding}><ObjHorizontalCard /></div>
          <div className={styles.cardPadding}><ObjHorizontalCard /></div>
          <div className={styles.cardPadding}><ObjHorizontalCard /></div>
          <div className={styles.cardPadding}><ObjHorizontalCard /></div>
        </Grid>
      </Grid>
    </Container>
  );
}
