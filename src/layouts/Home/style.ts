import { makeStyles } from '@material-ui/core';

const APP_BAR = 64;
const SIDEBAR_WIDTH = 240;

export default makeStyles({
  root: {
    display: 'flex',
    minHeight: '100%',
  },
  sidebar: {
    paddingTop: APP_BAR,
    width: SIDEBAR_WIDTH,
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  main: {
    paddingTop: APP_BAR + 30,
    flexGrow: 1,
  },
});
