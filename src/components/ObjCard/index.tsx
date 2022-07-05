import { Card, CardHeader, CardMedia } from '@material-ui/core';
import { useEffect, useState, ReactNode, VFC } from 'react';

import useStyles from './style';
import { HeaderTitle, HeaderTitleProps } from './HeaderTitle';
import { SubHeaderContent, SubHeaderContentProps } from './SubHeaderContent';

export type ObjCardProps = {
  fetcher: () => Promise<string | undefined>;
  onClick: () => void;
  avatar?: ReactNode;
} & HeaderTitleProps &
  SubHeaderContentProps;

export const ObjCard: VFC<ObjCardProps> = ({
  fetcher,
  onClick,
  avatar,
  title,
  owner,
  created,
  views,
}) => {
  const styles = useStyles();

  // モデルのサムネイルのURLを格納する
  const [imageSrc, setImageSrc] = useState<string>();

  useEffect(() => {
    fetcher().then(setImageSrc);
  });

  return (
    <Card onClick={onClick}>
      <CardMedia
        className={styles.media}
        image={imageSrc || '/static/no-image.jpg'}
        title='Thumbnail'
      />

      <CardHeader
        avatar={avatar}
        title={<HeaderTitle title={title} />}
        subheader={
          <SubHeaderContent owner={owner} created={created} views={views} />
        }
      />
    </Card>
  );
};
