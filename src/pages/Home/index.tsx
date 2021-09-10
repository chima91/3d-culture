import { Container, Grid } from "@material-ui/core";

import { ObjCard } from "../../components/ObjCard";

export const Home = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <ObjCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ObjCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ObjCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ObjCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ObjCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ObjCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ObjCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ObjCard />
        </Grid>
      </Grid>
    </Container>
  )
};