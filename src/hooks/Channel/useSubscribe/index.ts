import {
  useInsertSubscribeMutation,
  SubscribersDocument,
  UserByIdDocument
} from "../../../utils/graphql/generated";

type SubscribeProps = {
  userid: string;
  subscribeId: string;
}

export const useSubscribe = () => {
  const [insertSubscription, { data, error }] = useInsertSubscribeMutation({
    refetchQueries: [UserByIdDocument, SubscribersDocument],
  });

  const subscribe = async ({ userid, subscribeId }: SubscribeProps) => {
    if (userid && subscribeId) {
      try {
        await insertSubscription({
          variables: {
            userid: userid,
            subscribe_id: subscribeId
          }
        });
        if (error) console.log(error.message);
      } catch (e) {
        new Error("チャンネル登録に失敗しました。")
      }
    }
  };

  return {
    subscribe,
    data,
    error,
  };
};
