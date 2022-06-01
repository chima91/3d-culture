import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Container,
  Grid,
} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { ObjCard } from '../../components/ObjCard';
import { GlobalUser } from '../../stores/User';
import { storage } from '../../utils/Firebase/config';
import {
  useChannelListQuery,
  useUpdateModelViewsMutation,
  ModelsDocument,
} from '../../utils/graphql/generated';
import { useUnSubscribe } from '../../hooks/Channel/useUnSubscribe';
import useStyles from './style';

export const Channels = () => {
  const styles = useStyles();

  // ユーザ情報アトム
  const globalUser = useRecoilValue(GlobalUser);

  // 登録チャンネル一覧を取得するquery
  const { data, error } = useChannelListQuery({
    variables: {
      id: globalUser?.id || '',
    },
  });

  // チャンネル登録を解除する
  const { unsubscribe, error: delError } = useUnSubscribe();
  const onUnSubscribe = async (userid: string, subscribeId: string) => {
    await unsubscribe({
      userid,
      subscribeId,
    });
    if (delError) console.log(delError.message);
  };

  // 閲覧回数をカウントアップするmutation
  const [updateMutation, { error: apolloError }] = useUpdateModelViewsMutation({
    refetchQueries: [{ query: ModelsDocument }],
  });
  // 閲覧回数をカウントアップする関数
  const onClickCard = async (id: string | undefined) => {
    await updateMutation({
      variables: {
        modelId: id as string,
      },
    });
    if (apolloError) console.log(apolloError.message);
  };

  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return (
    <Container>
      {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
      <>
        {data?.users_by_pk?.subscribersByUserid.map((subscribe) => (
          <div key={subscribe.subscribed.id}>
            <Card className={styles.card}>
              <div>
                <CardHeader
                  className={styles.cardHeader}
                  avatar={
                    <Avatar
                      src={subscribe.subscribed.profile_photo_url || ''}
                    />
                  }
                  title={subscribe.subscribed.name}
                />
                <Button
                  variant='contained'
                  color='default'
                  startIcon={<CancelIcon />}
                  onClick={() =>
                    onUnSubscribe(globalUser?.id || '', subscribe.subscribed.id)
                  }
                  className={styles.unsubButton}
                >
                  登録解除
                </Button>
              </div>
              <Grid container spacing={2}>
                {subscribe.subscribed.usersModelArrayRelation.map((model) => (
                  <Grid item xs={3} key={model.id}>
                    <Link
                      to={`/detail/${model.id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <ObjCard
                        title={model.title as string}
                        views={model.views}
                        created={model.created_at}
                        fetcher={() =>
                          storage
                            .ref(model.thumbnail_url as string)
                            .getDownloadURL()
                        }
                        onClick={() => onClickCard(model.id)}
                      />
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </div>
        ))}
      </>
    </Container>
  );
};
