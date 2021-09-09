import { AppBar, Avatar, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { Logo } from "../../components/Logo";
import { SearchBar } from "./SearchBar";
import useStyles from "./style";

export const DashboardHeader = () => {
  const styles = useStyles();

  return (
    <div>
      <AppBar color="inherit" elevation={1}>
        <Toolbar className={styles.between}>
          <div className={styles.flex}>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <div className={styles.logo}>
              <Logo />
            </div>
          </div>

          <SearchBar />

          <IconButton className={styles.profileIcon}>
            <Avatar />
          </IconButton>

        </Toolbar>
      </AppBar>
    </div>
  )
}