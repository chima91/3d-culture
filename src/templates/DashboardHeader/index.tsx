import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { Logo } from "../../components/Logo";
import useStyles from "./style";

export const DashboardHeader = () => {
  const styles = useStyles();

  return (
    <div>
      <AppBar>
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <div className={styles.logo}>
            <Logo />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}