import { Link } from "react-router-dom";

import useStyles from "./style";

export const Logo = () => {
  const styles = useStyles();

  return (
    <Link to="/">
      <img
        className={styles.root}
        src="/static/logo.png"
        alt="Culpticon"
      />
    </Link>
  )
}
