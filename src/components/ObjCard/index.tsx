import { Avatar, Card, CardHeader, CardMedia } from "@material-ui/core";
import { useEffect, useState } from "react";

import useStyles from "./style";
import { HeaderTitle, HeaderTitleProps } from "./HeaderTitle";
import { SubHeaderContent, SubHeaderContentProps } from "./SubHeaderContent";

export type ObjCardProps = {
  // imageUrl: string;
  fetcher: () => Promise<string | undefined>;
} & HeaderTitleProps & SubHeaderContentProps;

export const ObjCard= ({ fetcher, title, owner, created }: ObjCardProps) => {
  const styles = useStyles();

  // 動画のサムネイルのURLを格納する
  const [imageSrc, setImageSrc] = useState<string>();

  useEffect(() => {
    fetcher().then(setImageSrc);
  });

  return (
    <Card>
      <CardMedia
        className={styles.media}
        image={imageSrc || "/static/thumbnail/no-image.jpg"}
        title="Thumbnail"
      />

      <CardHeader
        avatar={<Avatar />}
        title={<HeaderTitle title={title} />}
        subheader={<SubHeaderContent owner={owner} created={created} />}
      />
    </Card>
  );
};