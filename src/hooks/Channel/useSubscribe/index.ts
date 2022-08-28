import {
  useInsertSubscribeMutation,
  SubscribersDocument,
  UserByIdDocument,
} from '../../../utils/graphql/generated';

type SubscribeProps = {
  userid: string;
  subscribeId: string;
};

export const useSubscribe = () => {
  const [insertSubscription, { data, error }] = useInsertSubscribeMutation({
    refetchQueries: [UserByIdDocument, SubscribersDocument],
  });

  const subscribe = async ({ userid, subscribeId }: SubscribeProps) => {
    if (userid && subscribeId) {
      try {
        await insertSubscription({
          variables: {
            userid,
            subscribe_id: subscribeId,
          },
        });
      } catch (e) {
        throw new Error('チャンネル登録に失敗しました。');
      }
    }
  };

  return {
    subscribe,
    data,
    error,
  };
};
