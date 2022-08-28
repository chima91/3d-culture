import {
  useDeleteModelMutation,
  ModelsDocument,
} from '../../utils/graphql/generated';

type ModelDeleteProps = {
  id: string;
};

export const useModelDelete = () => {
  const [mutation, { error: apolloError }] = useDeleteModelMutation({
    refetchQueries: [{ query: ModelsDocument }],
  });

  const modelDelete = async ({ id }: ModelDeleteProps) => {
    if (id) {
      try {
        await mutation({
          variables: {
            id,
          },
        });
      } catch (e) {
        throw new Error('モデルの削除に失敗');
      }
    }
  };

  return {
    modelDelete,
    apolloError,
  };
};
