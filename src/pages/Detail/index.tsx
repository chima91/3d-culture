import { Container, Grid } from "@material-ui/core";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { CanvasArea } from "./CanvasArea";
import { ObjHorizontalCard } from "../../components/ObjHorizontalCard";
import { ModalQR } from "../../components/ModalQR";
import { SNS } from "../../components/SNS";
import useStyles from "./style";
import { useModelByPkQuery, useRecommendModelsQuery, useUpdateModelViewsMutation, ModelsDocument } from "../../utils/graphql/generated";
import { storage } from "../../utils/Firebase/config";

export const Detail = () => {
  const styles = useStyles();
  // URLから表示するモデルのIDを取得
  const { objId } = useParams();
  // IDから表示するモデルを取得
  const { data: currentModel } = useModelByPkQuery({
    variables: {
      id: objId
    }
  })
  // IDからリコメンドのモデル群を取得
  const { data: recommendModels } = useRecommendModelsQuery({
    variables: {
      currentModelId: objId,
    },
  });

  // 閲覧回数をカウントアップするmutation
  const [ updateMutation, { error: apolloError } ] = useUpdateModelViewsMutation({
    refetchQueries: [{ query: ModelsDocument }]
  });
  // 閲覧回数をカウントアップする関数
  const onClickCard = async (id: string | undefined) => {
    await updateMutation({
      variables: {
        modelId: id as string
      }
    });
    if (apolloError) console.log(apolloError.message)
  };

  return (
    <Container className={styles.root}>
      <ModalQR />
      <SNS />
      <Grid container spacing={4}>
        <Grid item xs={12} lg={8}>
          <CanvasArea
            title={currentModel?.models_by_pk?.title}
            created={currentModel?.models_by_pk?.created_at}
            owner={currentModel?.models_by_pk?.owner?.name}
            description={currentModel?.models_by_pk?.description}
            views={currentModel?.models_by_pk?.views}
            fetcher={async() => {
              if(currentModel?.models_by_pk?.model_url) {
                return storage
                  .ref(currentModel.models_by_pk.model_url)
                  .getDownloadURL();
              }
              return undefined;
            }}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          {recommendModels?.models.map((model) => (
            <div className={styles.cardPadding} key={model.id}>
              <Link
                to={`/detail/${model.id}`}
                style={{ textDecoration: "none" }}
              >
                <ObjHorizontalCard
                  title={model.title}
                  owner={model.owner?.name || ""}
                  created={model.created_at}
                  views={model.views}
                  fetcher={() =>
                    storage.ref(model.thumbnail_url!).getDownloadURL()
                  }
                  onClick={() => onClickCard(currentModel?.models_by_pk?.id)}
                />
              </Link>
            </div>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
