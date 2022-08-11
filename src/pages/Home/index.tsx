import { Avatar, Container, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useState, VFC } from 'react';
import { useRecoilValue } from 'recoil';

import Head from '../../components/Head';
import { ObjCard } from '../../components/ObjCard';
import { ModalQR } from '../../components/ModalQR';
import { SNS } from '../../components/SNS';
import { storage } from '../../utils/Firebase/config';
import {
  useModelsQuery,
  useUpdateModelViewsMutation,
  ModelsDocument,
} from '../../utils/graphql/generated';
import { PaginationWrapper } from '../../components/Pagination';
import { SearchWords } from '../../stores/SearchWords';
import useStyles from './style';

export const Home: VFC = () => {
  // modelを取得するquery
  const { data } = useModelsQuery();

  // 検索ワードがある(recoil(SearchWords)がundefinedではない)場合は、data.modelsを絞り込み、modelsに結果を入れる
  const searchWords = useRecoilValue(SearchWords);
  const models =
    searchWords && data
      ? data.models.filter((model) =>
          model.title?.match(searchWords.title || ''),
        )
      : data?.models;

  // ページ制御
  const COUNT_PER_PAGE = 8;
  const [page, setPage] = useState(1);
  const [startItem, setStartItem] = useState(0);
  const handleChange = (value: number) => {
    setPage(value);
    setStartItem((value - 1) * COUNT_PER_PAGE);
  };
  // データ(モデル)数と1ページあたりの表示件数から全ページ数を計算する
  const totalPage =
    Math.floor(((models?.length || 0) - 1) / COUNT_PER_PAGE) + 1;
  // currentPageの開始モデルからCOUNT_PER_PAGE分のモデルを表示する
  const pageItem = models?.slice(startItem, startItem + COUNT_PER_PAGE);

  // 閲覧回数をカウントアップするmutation
  const [updateMutation] = useUpdateModelViewsMutation({
    refetchQueries: [{ query: ModelsDocument }],
  });
  // 閲覧回数をカウントアップする関数
  const onClickCard = async (id: string | undefined) => {
    await updateMutation({
      variables: {
        modelId: id as string,
      },
    });
  };

  const styles = useStyles();

  return (
    <Container>
      <Head title='トップページ' />
      <ModalQR />
      <SNS />
      <Grid container spacing={2}>
        {/* 検索ワードで絞り込んだ結果、該当するモデルがなかった場合にメッセージを表示 */}
        {!pageItem?.length && <p>該当するモデルがありませんでした。</p>}
        {/* queryでモデルを取得した後、条件で絞り込んだor全てのモデルデータを1ページ毎に表示 */}
        {pageItem?.map((model) => (
          <Grid item xs={6} lg={3} key={model.id}>
            <Link to={`/detail/${model.id}`} className={styles.link}>
              <ObjCard
                title={model.title}
                owner={model.owner?.name || ''}
                created={model.created_at}
                views={model.views}
                fetcher={() =>
                  storage.ref(model.thumbnail_url || '').getDownloadURL()
                }
                onClick={() => onClickCard(model.id)}
                avatar={<Avatar src={model.owner?.profile_photo_url || ''} />}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
      <PaginationWrapper
        totalPage={totalPage}
        currentPage={page}
        handleChange={(value: number) => handleChange(value)}
      />
    </Container>
  );
};
