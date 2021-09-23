import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import { ObjCard } from "../../components/ObjCard";
import useStyles from "./style";

export const Home = () => {
  const styles = useStyles();

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item className={styles.underline} component={Link} to="/detail/1" xs={12} md={6} lg={4}>
          <ObjCard imageUrl="/static/haniwa.jpg" title="踊るハニワ" owner="あいうえ博物館" created={new Date()} />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/2" xs={12} md={6} lg={4}>
          <ObjCard imageUrl="/static/no-image.jpg" title="踊らないハニワ" owner="かきくけ博物館" created={new Date()} />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/3" xs={12} md={6} lg={4}>
          <ObjCard imageUrl="/static/haniwa.jpg" title="踊るハニワ" owner="あいうえ博物館" created={new Date()} />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/4" xs={12} md={6} lg={4}>
          <ObjCard imageUrl="/static/no-image.jpg" title="踊るハニワ" owner="あいうえ博物館" created={new Date()} />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/5" xs={12} md={6} lg={4}>
          <ObjCard imageUrl="/static/haniwa.jpg" title="踊るハニワ" owner="あいうえ博物館" created={new Date()} />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/6" xs={12} md={6} lg={4}>
          <ObjCard imageUrl="/static/haniwa.jpg" title="踊るハニワ" owner="あいうえ博物館" created={new Date()} />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/7" xs={12} md={6} lg={4}>
          <ObjCard imageUrl="/static/no-image.jpg" title="踊るハニワ" owner="あいうえ博物館" created={new Date()} />
        </Grid>
        <Grid item className={styles.underline} component={Link} to="/detail/8" xs={12} md={6} lg={4}>
          <ObjCard imageUrl="/static/haniwa.jpg" title="踊るハニワ" owner="あいうえ博物館" created={new Date()} />
        </Grid>
      </Grid>
    </Container>
  )
};