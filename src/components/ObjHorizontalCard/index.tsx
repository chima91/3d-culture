/**
 * @prettier
 */

import { Card, CardHeader, CardMedia } from "@material-ui/core";
import { useState, useEffect } from "react";

import { HeaderTitle, HeaderTitleProps } from "../ObjCard/HeaderTitle";
import { SubHeaderContent, SubHeaderContentProps } from "../ObjCard/SubHeaderContent";
import useStyles from "./style";

export type ObjHorizontalCardProps = {
  fetcher: () => Promise<string | undefined>;
  onClick: () => void;
} & HeaderTitleProps & SubHeaderContentProps;

export const ObjHorizontalCard = ({ fetcher, title, owner, created, views, onClick }: ObjHorizontalCardProps) => {
  const styles = useStyles();
  // サムネイルのダウンロードリンクのステート
  const [src, setSrc] = useState<string>();
  useEffect(() => {
    // サムネイルのダウンロードリンクを取得する関数
    fetcher().then(setSrc);
  });
  // モデルのタイトルが10文字を超える場合は省略する
  if(title.length > 10) {
    title = title.slice(0, 10) + '...';
  }

  return (
    <Card className={styles.root} elevation={0} square onClick={onClick}>
      <div className={styles.thumbnail}>
        <CardMedia className={styles.media} image={src ? src : '/static/no-image.jpg'} title="Thumbnail" />
      </div>
      <CardHeader
        className={styles.contentPadding}
        title={<HeaderTitle title={title} />}
        subheader={<SubHeaderContent owner={owner} created={created} views={views} />}
      />
    </Card>
  );
};