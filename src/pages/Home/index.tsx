import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import { ObjCard } from "../../components/ObjCard";
import { ModalQR } from "../../components/ModalQR";
import { SNS } from "../../components/SNS";
import useStyles from "./style";
import { storage } from "../../utils/Firebase/config";
import { useModelsQuery } from "../../utils/graphql/generated";

export const Home = () => {
  const styles = useStyles();

  const { data, error } = useModelsQuery();

  useEffect(() => {
    if(error) console.error(error);
  }, [error]);

  return (
    <Container>
      <ModalQR />
      <SNS />
      <Grid container spacing={2}>
        {data?.models.map((model) => (
          <Grid item xs={3} key={model.id}>
            <Link to={`/detail/${model.id}`} style={{ textDecoration: "none" }}>
              <ObjCard
                title={model.title}
                owner={model.owner?.name || ''}
                created={model.created_at}
                fetcher={() => storage.ref(model.thumbnail_url!).getDownloadURL()}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
};