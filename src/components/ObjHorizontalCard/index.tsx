import { Card, CardHeader, CardMedia } from '@material-ui/core';
import { useState, useEffect, VFC } from 'react';

import { HeaderTitle, HeaderTitleProps } from '../ObjCard/HeaderTitle';
import {
  SubHeaderContent,
  SubHeaderContentProps,
} from '../ObjCard/SubHeaderContent';
import useStyles from './style';

export type ObjHorizontalCardProps = {
  fetcher: () => Promise<string | undefined>;
  onClick: () => void;
} & HeaderTitleProps &
  SubHeaderContentProps;

export const ObjHorizontalCard: VFC<ObjHorizontalCardProps> = ({
  fetcher,
  title,
  owner,
  created,
  views,
  onClick,
}) => {
  const styles = useStyles();
  // サムネイルのダウンロードリンクのステート
  const [src, setSrc] = useState<string>();
  useEffect(() => {
    // サムネイルのダウンロードリンクを取得する関数
    fetcher().then(setSrc);
  });
  // no-param-reassignに対応しつつ、モデルのタイトルが10文字を超える場合は省略する
  let titleCopy = title;
  if (titleCopy.length > 10) {
    titleCopy = `${title.slice(0, 10)}...`;
  }

  return (
    <Card className={styles.root} elevation={0} square onClick={onClick}>
      <div className={styles.thumbnail}>
        <CardMedia
          className={styles.media}
          image={src || '/static/no-image.jpg'}
          title='Thumbnail'
        />
      </div>
      <CardHeader
        className={styles.contentPadding}
        title={<HeaderTitle title={titleCopy} />}
        subheader={
          <SubHeaderContent owner={owner} created={created} views={views} />
        }
      />
    </Card>
  );
};
