import { makeStyles } from "@material-ui/core";

const APP_BAR = 64;
const SIDEBAR_WIDTH = 240;

export default makeStyles({
  root: {
    display: "flex",
    minHeight: "100%"
  },
  sidebar: {
    paddingTop: APP_BAR,
    width: SIDEBAR_WIDTH,
    "@media (max-width: 600px)": {
      display: "none",
    }
  },
  main: {
    paddingTop: APP_BAR + 30,
    // 横並び時に最大まで幅を大きくさせる
    flexGrow: 1
  },
})