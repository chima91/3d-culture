import useStyles from "./style";

export const Logo = () => {
  const styles = useStyles();

  return (
    <img
      className={styles.root}
      src="/static/logo.png"
      alt="Culpticon Logo"
    />
  )
}