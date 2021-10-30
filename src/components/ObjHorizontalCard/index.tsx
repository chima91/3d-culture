import { Card, CardHeader, CardMedia } from "@material-ui/core";
import { useState, useEffect } from "react";

import { HeaderTitle, HeaderTitleProps } from "../ObjCard/HeaderTitle";
import { SubHeaderContent, SubHeaderContentProps } from "../ObjCard/SubHeaderContent";
import useStyles from "./style";

export type ObjHorizontalCardProps = {
  fetcher: () => Promise<string | undefined>;
} & HeaderTitleProps & SubHeaderContentProps;

export const ObjHorizontalCard = ({ fetcher, title, owner, created }: ObjHorizontalCardProps) => {
  const styles = useStyles();
  // サムネイルのダウンロードリンクのステート
  const [src, setSrc] = useState<string>();
  useEffect(() => {
    // サムネイルのダウンロードリンクを取得する関数
    fetcher().then(setSrc);
  });
  console.log('src(ObjHorizontal component)：', src);

  return (
    <Card className={`${styles.root} ${styles.transparent}`} elevation={0} square>
      {src ? (
        <div className={styles.thumbnail}>
          <CardMedia className={styles.media} image={src} title="Thumbnail" />
        </div>
      ) : (
        <></>
      )}
      <CardHeader
        className={styles.contentPadding}
        title={<HeaderTitle title={title} />}
        subheader={<SubHeaderContent owner={owner} created={created} />}
      />
    </Card>
  );
};