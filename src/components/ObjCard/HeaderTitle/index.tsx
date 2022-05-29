import { Typography } from '@material-ui/core';

import useStyles from './style';

export type HeaderTitleProps = {
  title: string;
};

export const HeaderTitle = ({ title }: HeaderTitleProps) => {
  const styles = useStyles();
  // モデルのタイトルが10文字を超える場合は省略する
  const isTitleOver10 = title.length > 10;

  return (
    <Typography className={styles.root} variant='subtitle1' component='h3'>
      {isTitleOver10 && title.slice(0, 10)}
      {!isTitleOver10 && title}
    </Typography>
  );
};
