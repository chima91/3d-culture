import { makeStyles } from "@material-ui/core";

export default makeStyles({
  root: {
    paddingLeft: 10,
    display: "flex",
    alignItems: "center",
    maxWidth: 700,
    flex: 1,
    overflow: "hidden",
    marginLeft: 10,
    "@media (max-width: 600px)": {
      paddingLeft: 0
    }
  },
  input: {
    width: "100%",
    "@media (max-width: 600px)": {
      display: "none"
    }
  },
  searchIcon: {
    width: 80,
    height: 34,
    backgroundColor: "#F4F4F4",
    borderLeft: "1px solid #CCCCCC",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": { opacity: 0.72 },
  },
});