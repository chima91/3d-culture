import { Card, CardContent, CardHeader, Divider, Typography, Button } from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { useEffect, useState, Suspense } from "react";

import { Three } from "../../../components/Three";
import useStyles from "./style";

export type CanvasAreaProps = {
  title: string | undefined;
  created: Date | undefined;
  owner: string | undefined;
  avatar: React.ReactNode | undefined;
  description: string | undefined;
  views: number | undefined;
  subscribers: number | undefined;  // 被登録者数
  isCurrentModelByOthers: boolean;  // ログイン中のユーザーと、表示中モデルの投稿者が違うかどうか
  isSubscribed: boolean;  // チャンネル登録済みかどうか
  onSubscribe: () => any;  // チャンネル登録処理
  onUnSubscribe: () => any;  // チャンネル登録解除処理
  fetcher: () => Promise<string | undefined>;
};

export const CanvasArea = ({
  title,
  created,
  owner,
  avatar,
  description,
  views,
  subscribers,
  isCurrentModelByOthers,
  isSubscribed,
  onSubscribe,
  onUnSubscribe,
  fetcher
}: CanvasAreaProps) => {
  const styles = useStyles();
  // モデルのダウンロードリンクURLを格納するためのステート
  const [src, setSrc] = useState<string>();
  useEffect(() => {
    // Firebase Storageからモデルのダウンロードリンクを取得する
    fetcher().then(setSrc);
  });

  return (
    <Card>
      {/* 3Dオブジェ表示エリア */}
      <CardContent className={styles.canvas} >
        <Suspense fallback={<div style={{ color: "white", textAlign: "center", marginTop: 100 }}>Now Loading...</div>}>
          {src ? (
            <Three glbSource={src} />
          ) : (
            <></>
          )}
        </Suspense>
      </CardContent>

      {/* タイトル表示エリア */}
      <CardContent>
        <Typography component="h2" variant="h4">{title}</Typography>
        <Typography variant="body2" color="textSecondary">{created ? new Date(created).toLocaleDateString() : ""}</Typography>
        <Typography variant="body2" color="textSecondary">閲覧回数：{views}回</Typography>
      </CardContent>

      {/* タイトル下の横線 */}
      <Divider />

      {/* 投稿者情報エリア */}
      <CardHeader
        avatar={avatar}
        title={owner}
        subheader={`チャンネル登録者数：${subscribers || 0}人`}
      />

      {/* チャンネル登録/解除エリア */}
      {isCurrentModelByOthers &&
      <div className={styles.channelBtn}>
        {isSubscribed ? (
          <Button
            variant="contained"
            color="default"
            onClick={onUnSubscribe}
            startIcon={<CancelIcon />}
          >
            チャンネル登録解除
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={onSubscribe}
            startIcon={<AddCircleIcon />}
          >
            チャンネル登録
          </Button>
        )}
      </div>
    }

      {/* 博物館の方の説明文エリア */}
      <CardContent className={styles.descPadding}>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
};