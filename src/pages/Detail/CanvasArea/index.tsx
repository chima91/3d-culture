import { Avatar, Card, CardContent, CardHeader, Divider, Typography } from "@material-ui/core";
import { Suspense } from "react";

import { Three, ThreeProp } from "../../../components/Three";
import useStyles from "./style";

type CanvasAreaProps = {
  title: string;
  created: Date;
  owner: string;
  description: string;
} & ThreeProp;

export const CanvasArea = ({ glbSource, title, created, owner, description }: CanvasAreaProps) => {
  const styles = useStyles();

  return (
    <Card>
      {/* 3Dオブジェ表示エリア */}
      <CardContent className={styles.canvas}>
        <Suspense fallback={<div style={{ color: "white", textAlign: "center", marginTop: 100 }}>Now Loading...</div>}>
          <Three glbSource={glbSource}/>
        </Suspense>
      </CardContent>

      {/* タイトル表示エリア */}
      <CardContent>
        <Typography component="h2" variant="h4">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {new Date(created).toLocaleDateString()}
        </Typography>
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
        <Typography>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};