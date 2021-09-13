import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import { ObjCard } from "../../components/ObjCard";
import useStyles from "./style";

export const Home = () => {
  const styles = useStyles();

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item className={styles.underline} component={Link} to="/detail/5" xs={12} md={6} lg={4}>
          <ObjCard />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/5" xs={12} md={6} lg={4}>
          <ObjCard />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/5" xs={12} md={6} lg={4}>
          <ObjCard />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/5" xs={12} md={6} lg={4}>
          <ObjCard />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/5" xs={12} md={6} lg={4}>
          <ObjCard />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/5" xs={12} md={6} lg={4}>
          <ObjCard />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/5" xs={12} md={6} lg={4}>
          <ObjCard />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/5" xs={12} md={6} lg={4}>
          <ObjCard />
        </Grid>
      </Grid>
    </Container>
  )
};