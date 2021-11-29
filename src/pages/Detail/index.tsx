import { Container, Grid } from "@material-ui/core";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { GlobalUser } from "../../stores/User";
import { useSubscribe } from "../../hooks/Channel/useSubscribe";
import { useUnSubscribe } from "../../hooks/Channel/useUnSubscribe";

import { CanvasArea } from "./CanvasArea";
import { ObjHorizontalCard } from "../../components/ObjHorizontalCard";
import { ModalQR } from "../../components/ModalQR";
import { SNS } from "../../components/SNS";
import useStyles from "./style";
import { useModelByPkQuery, useRecommendModelsQuery, useSubscribersQuery, useUpdateModelViewsMutation, ModelsDocument } from "../../utils/graphql/generated";
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

  // モデル投稿者の登録者数を取得する
  const { data: subscribers } = useSubscribersQuery({
    variables: {
      ownerid: currentModel?.models_by_pk?.owner?.id || ''
    }
  })
  // チャンネル登録する
  const { subscribe, error: insError } = useSubscribe();
  const onSubscribe = async (userid: string, subscribeId: string) => {
    await subscribe({
      userid: userid,
      subscribeId: subscribeId
    });
    if (insError) console.log(insError.message)
  }
  // チャンネル登録を解除する
  const { unsubscribe, error: delError } = useUnSubscribe();
  const onUnSubscribe = async (userid: string, subscribeId: string) => {
    await unsubscribe({
      userid: userid,
      subscribeId: subscribeId
    });
    if (delError) console.log(delError.message);
  }
  // チャンネル登録済みユーザーを取得し、表示中のモデル投稿者が含まれるか調べる
  // ユーザー情報から登録済みチャンネルIDの配列を取得
  const globalUser = useRecoilValue(GlobalUser);
  // 表示中のモデル投稿者のチャンネルをログイン中のユーザーが登録しているか
  const isSubscribed =
    globalUser?.subscribersByUserid?.filter(
      (sub) => sub.subscribe_id === currentModel?.models_by_pk?.owner?.id
    ).length === 1
  // ログイン中のユーザーと、表示中モデルの投稿者が違うかどうか
  const isCurrentModelByOthers = (globalUser?.id && globalUser.id !== currentModel?.models_by_pk?.owner?.id)

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
                  onClick={() => onClickCard(model.id)}
                />
              </Link>
            </div>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
