/**
 * @prettier
 */

import { Avatar, Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";

import { ObjCard } from "../../components/ObjCard";
import { ModalQR } from "../../components/ModalQR";
import { SNS } from "../../components/SNS";
import { GoogleForm } from "../../components/GoogleForm";
import { storage } from "../../utils/Firebase/config";
import { useModelsQuery, useUpdateModelViewsMutation, ModelsDocument } from "../../utils/graphql/generated";
import { PaginationWrapper } from "../../components/Pagination";
import { SearchWords } from "../../stores/SearchWords";

export const Home = () => {
  // modelを取得するquery
  const { data, error } = useModelsQuery();

  // エラーがあればコンソールに表示
  useEffect(() => {
    if(error) console.error(error);
  }, [error]);

  // 検索ワードがある(recoil(SearchWords)がundefinedではない)場合は、data.modelsを絞り込み、modelsに結果を入れる
  const searchWords = useRecoilValue(SearchWords);
  const models = (searchWords && data) ?
    data.models.filter(
      (model) => model.title?.match(searchWords.title || '')
    ) : data?.models;

  // ページ制御
  const COUNT_PER_PAGE = 8;
  const [page, setPage] = useState(1);
  const [startItem, setStartItem] = useState(0);
  const handleChange = (value: number) => {
    setPage(value);
    setStartItem((value-1) * COUNT_PER_PAGE);
  };
  // データ(モデル)数と1ページあたりの表示件数から全ページ数を計算する
  const totalPage = Math.floor(((models?.length || 0) - 1) / COUNT_PER_PAGE) + 1
  // currentPageの開始モデルからCOUNT_PER_PAGE分のモデルを表示する
  const pageItem = models?.slice(startItem, startItem + COUNT_PER_PAGE);

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
    <Container>
      <ModalQR />
      <SNS />
      <GoogleForm />
      <Grid container spacing={2}>
        {/* queryでモデルを取得した後、条件で絞り込んだor全てのモデルデータを1ページ毎に表示する */}
        {pageItem?.map((model) => (
          <Grid item xs={12} md={6} lg={3} key={model.id}>
            <Link to={`/detail/${model.id}`} style={{ textDecoration: "none" }}>
              <ObjCard
                title={model.title}
                owner={model.owner?.name || ""}
                created={model.created_at}
                views={model.views}
                fetcher={() => storage.ref(model.thumbnail_url || "").getDownloadURL()}
                onClick={() => onClickCard(model.id)}
                avatar={<Avatar src={model.owner?.profile_photo_url || ""} />}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
      <PaginationWrapper totalPage={totalPage} currentPage={page} handleChange={(value: number) => handleChange(value)} />
    </Container>
  )
};