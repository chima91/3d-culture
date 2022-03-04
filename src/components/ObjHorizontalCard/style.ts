import { makeStyles } from "@material-ui/core";

export default makeStyles({
  root: {
    display: "flex",
    backgroundColor: "transparent",
  },
  thumbnail: {
    width: "50%",
  },
  media: {
    paddingTop: "56.25%", // 16:9
  },
  contentPadding: {
    width: "50%",
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 10,
  },
});