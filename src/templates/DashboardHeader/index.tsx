import { AppBar, Avatar, Button, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useRecoilValue } from "recoil";

import { Logo } from "../../components/Logo";
import { SearchBar } from "./SearchBar";
import useStyles from "./style";
import { GlobalUser } from "../../stores/User";

export const DashboardHeader = () => {
  const styles = useStyles();
  const globalUser = useRecoilValue(GlobalUser);

  return (
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

        {/*
          ユーザーがログインしていれば、アップロードボタンとユーザーアバターを表示
          未ログインであれば「ログインボタン」を表示
        */}
        {globalUser ? (
          <>
            <Button variant="outlined" color="primary" href="/upload">
              アップロード
            </Button>
            <IconButton className={styles.profileIcon}>
              <Avatar />
            </IconButton>
          </>
        ) : (
          <Button variant="outlined" color="primary" href="/login">
            ログイン
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}