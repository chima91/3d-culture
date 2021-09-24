import { Card, CardHeader, CardMedia } from "@material-ui/core";

import { HeaderTitle, HeaderTitleProps } from "../ObjCard/HeaderTitle";
import { SubHeaderContent, SubHeaderContentProps } from "../ObjCard/SubHeaderContent";
import useStyles from "./style";

export type ObjHorizontalCardProps = {
  imageUrl: string;
} & HeaderTitleProps & SubHeaderContentProps;

export const ObjHorizontalCard = ({ imageUrl, title, owner, created }: ObjHorizontalCardProps) => {
  const styles = useStyles();

  return (
    <Card className={`${styles.root} ${styles.transparent}`} elevation={0} square>
      <div className={styles.thumbnail}>
        <CardMedia className={styles.media} image={imageUrl} title="Thumbnail" />
      </div>
      <CardHeader className={styles.contentPadding} title={<HeaderTitle title={title} />} subheader={<SubHeaderContent owner={owner} created={created} />} />
    </Card>
  );
};