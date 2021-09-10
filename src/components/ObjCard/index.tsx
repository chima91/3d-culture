import { Avatar, Card, CardHeader, CardMedia } from "@material-ui/core";

import useStyles from "./style";

export const ObjCard= () => {
  const styles = useStyles();

  return (
    // elevation={0} : Cardの影を削除する
    // square : 丸みの除去
    <Card className={styles.root} elevation={0} square>

      <CardMedia
        className={styles.media}
        image="/static/haniwa.jpg"
        title="Thumbnail"
      />

      <CardHeader
        className={styles.header}
        avatar={<Avatar />}
        title="踊るハニワ"
        subheader="名古屋大学博物館"
      />
    </Card>
  );
};