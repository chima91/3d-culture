import { Button, Card, Typography } from "@material-ui/core";

import { Logo } from "../../components/Logo";
import useStyles from "./style";

export const NotFound = () => {
  const styles = useStyles();

  return (
    <Card className={styles.root} variant="outlined">
      <div className={`${styles.logo} ${styles.margin}`}>
        <Logo />
      </div>

      <Typography className={styles.margin} component="h1" variant="h5">
        お探しのページは見つかりませんでした。
      </Typography>

      <div>
        <Button href="/" color="primary">
          トップページへ戻る
        </Button>
      </div>
    </Card>
  );
};