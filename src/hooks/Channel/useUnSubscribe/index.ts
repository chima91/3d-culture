import {
  useDeleteSubscribeMutation,
  SubscribersDocument,
  UserByIdDocument,
} from '../../../utils/graphql/generated';

type UnSubscribeProps = {
  userid: string;
  subscribeId: string;
};

export const useUnSubscribe = () => {
  const [deleteSubscription, { data, error }] = useDeleteSubscribeMutation({
    refetchQueries: [UserByIdDocument, SubscribersDocument],
  });

  const unsubscribe = async ({ userid, subscribeId }: UnSubscribeProps) => {
    if (userid && subscribeId) {
      try {
        await deleteSubscription({
          variables: {
            userid,
            subscribe_id: subscribeId,
          },
        });

        if (error) console.log(error.message);
      } catch (e) {
        new Error('チャンネル登録の解除に失敗しました。');
      }
    }
  };

  return {
    unsubscribe,
    data,
    error,
  };
};
