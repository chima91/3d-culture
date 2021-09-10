import { makeStyles } from "@material-ui/core";

export default makeStyles({
  root: {
    maxWidth: 360,
    backgroundColor: "transparent",
  },

  // 16:9の解像度のサムネイル画像を表示させる。
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },

  header: {
    alignItems: "start",
    backgroundColor: "transparent",
    paddingLeft: 0,
    paddingRight: 0,
  },
});