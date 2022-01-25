import { makeStyles } from "@material-ui/core";

export default makeStyles({
  root: {
    // display: "flex",
    minHeight: 300,
    // justifyContent: "center",
    // alignItems: "center",
  },
  textPadding: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  button: {
    textAlign: "center",
    margin: "30px 0"
  },
  thumbnail: {
    paddingTop: "56.25%", // アスペクト比が16:9
  },
});