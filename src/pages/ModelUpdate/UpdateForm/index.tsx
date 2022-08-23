import { Button, TextField, Typography } from '@material-ui/core';
import { useEffect, useRef, useState, VFC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { useModelUpdate } from '../../../hooks/ModelUpdate';
import { GlobalUser } from '../../../stores/User';
import { useModelByPkQuery } from '../../../utils/graphql/generated';

import useStyles from './style';

export type UpdateFormProps = {
  modelFile: File | undefined;
  thumbFile: File | undefined;
};

export const UpdateForm: VFC<UpdateFormProps> = ({ modelFile, thumbFile }) => {
  const styles = useStyles();

  // URLから表示するモデルのIDを取得
  const { objId } = useParams();
  // IDから表示するモデルを取得
  const { data: currentModel } = useModelByPkQuery({
    variables: {
      id: objId,
    },
  });

  // リダイレクト用関数
  const navigate = useNavigate();

  // モデルを更新する際の、ownerIdのためのuserId
  const globalUser = useRecoilValue(GlobalUser);

  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

  // エラーを表示する用のステート
  const [errorMessage, setErrorMessage] = useState<Error>();

  // モデルやサムネイル, タイトル, 説明文を更新するためのカスタムフックを使用
  const { upload, loading, error: uploadError } = useModelUpdate();

  // アップロードボタンをクリックしたら実行する関数
  const submit = () => {
    setErrorMessage(undefined);

    if (!globalUser?.id)
      return setErrorMessage(new Error('ログインしてください。'));
    if (!modelFile || !thumbFile)
      return setErrorMessage(new Error('ファイルを選択してください。'));
    if (!titleRef.current?.value)
      return setErrorMessage(new Error('タイトルを入力してください。'));

    return upload({
      modelId: currentModel?.models_by_pk?.id,
      file: {
        model: modelFile,
        thumbnail: thumbFile,
      },
      title: titleRef.current.value,
      description: descRef.current?.value,
    }).then((data) => {
      // 更新が成功したら、`/detail/modelId` にリダイレクト
      if (data?.id) {
        navigate(`/detail/${objId}`);
      }
    });
  };

  // カスタムフックからのエラーを受け取り、画面表示用のエラーステートに渡す。
  useEffect(() => {
    setErrorMessage(uploadError);
  }, [uploadError]);

  return (
    <>
      <label className={styles.label}>
        <Typography variant='body2'>タイトル</Typography>
        <TextField
          size='small'
          fullWidth
          variant='outlined'
          inputRef={titleRef}
          defaultValue={currentModel?.models_by_pk?.title}
        />
      </label>

      <label className={styles.label}>
        <Typography variant='body2'>説明</Typography>
        <TextField
          size='small'
          fullWidth
          variant='outlined'
          multiline
          rows={4}
          inputRef={descRef}
          defaultValue={currentModel?.models_by_pk?.description}
        />
      </label>

      {
        // エラーがあれば表示
        errorMessage?.message && (
          <label className={styles.label}>
            <Typography color='error'>{errorMessage.message}</Typography>
          </label>
        )
      }

      <div className={styles.button}>
        <Button
          variant='contained'
          color='primary'
          disabled={loading}
          onClick={submit}
        >
          {loading ? '更新中' : '更新する'}
        </Button>
      </div>
    </>
  );
};
