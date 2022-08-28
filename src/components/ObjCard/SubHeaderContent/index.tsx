import { Typography } from '@material-ui/core';
import { VFC } from 'react';

export type SubHeaderContentProps = {
  owner?: string;
  created?: Date;
  views?: number;
};

export const SubHeaderContent: VFC<SubHeaderContentProps> = ({
  owner,
  created,
  views,
}) => (
  <>
    <Typography variant='body2'>{owner}</Typography>
    <Typography variant='body2'>
      {created && new Date(created).toLocaleDateString()}
    </Typography>
    <Typography variant='body2'>閲覧回数：{views}回</Typography>
  </>
);
