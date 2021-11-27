import { Avatar, Card, CardContent, CardHeader, Divider, Typography } from "@material-ui/core";
import { useEffect, useState, Suspense } from "react";

import { Three } from "../../../components/Three";
import useStyles from "./style";

export type CanvasAreaProps = {
  title: string | undefined;
  created: Date | undefined;
  owner: string | undefined;
  description: string | undefined;
  views: number | undefined;
  fetcher: () => Promise<string | undefined>;
};

export const CanvasArea = ({ title, created, owner, description, views, fetcher }: CanvasAreaProps) => {
  const styles = useStyles();
  // モデルのダウンロードリンクURLを格納するためのステート
  const [src, setSrc] = useState<string>();
  useEffect(() => {
    // Firebase Storageからモデルのダウンロードリンクを取得する
    fetcher().then(setSrc);
  });
  console.log('src(CanvasArea component)：', src);

  return (
    <Card>
      {/* 3Dオブジェ表示エリア */}
      <CardContent className={styles.canvas}>
        <Suspense fallback={<div style={{ color: "white", textAlign: "center", marginTop: 100 }}>Now Loading...</div>}>
          {src ? (
            <Three glbSource={src}/>
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
        avatar={<Avatar />}
        title={owner}
      />

      {/* 博物館の方の説明文エリア */}
      <CardContent className={styles.descPadding}>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
};