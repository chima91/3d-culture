import { Avatar, Card, CardContent, CardHeader, Divider, Typography } from "@material-ui/core";

import { Canvas } from "react-three-fiber";
import { Three } from "../../../components/Three";
import useStyles from "./style";

export const CanvasArea = () => {
  const styles = useStyles();

  return (
    <Card>
      {/* 3Dオブジェ表示エリア */}
      <CardContent className={styles.canvas}>
        <Canvas camera={{ position: [0, 0, 888] }}>
          <Three />
        </Canvas>
      </CardContent>

      {/* タイトル表示エリア */}
      <CardContent>
        <Typography component="h2" variant="h4">
          踊るハニワ
        </Typography>
        <Typography variant="body2" color="textSecondary">
          2021/09/13
        </Typography>
      </CardContent>

      {/* タイトル下の横線 */}
      <Divider />

      {/* 投稿者情報エリア */}
      <CardHeader
        avatar={<Avatar />}
        title="名古屋大学博物館"
      />

      {/* 博物館の方の説明文エリア */}
      <CardContent className={styles.descPadding}>
        <Typography>
          この「踊るハニワ」は......
        </Typography>
      </CardContent>
    </Card>
  );
};