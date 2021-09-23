import { Avatar, Card, CardHeader, CardMedia } from "@material-ui/core";

import useStyles from "./style";
import { HeaderTitle, HeaderTitleProps } from "./HeaderTitle";
import { SubHeaderContent, SubHeaderContentProps } from "./SubHeaderContent";

export type ObjCardProps = {
  imageUrl: string;
} & HeaderTitleProps & SubHeaderContentProps;

export const ObjCard= ({ imageUrl, title, owner, created }: ObjCardProps) => {
  const styles = useStyles();

  return (
    // elevation={0}: Cardの影を削除する。 square: 丸みの除去
    <Card>
      <CardMedia
        className={styles.media}
        image={imageUrl}
        title="Thumbnail"
      />

      <CardHeader
        className={styles.header}
        avatar={<Avatar />}
        title={<HeaderTitle title={title} />}
        subheader={<SubHeaderContent owner={owner} created={created} />}
      />
    </Card>
  );
};