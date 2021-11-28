import { AppBar, Avatar, Button, IconButton, Toolbar, Dialog, DialogContent } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import SearchIcon from "@material-ui/icons/Search";
import { useRecoilValue } from "recoil";
import { Link, useNavigate } from "react-router-dom";
import { useState, MouseEvent } from "react";
import { useMediaQuery } from 'react-responsive';

import { Logo } from "../../components/Logo";
import { SearchBar } from "./SearchBar";
import useStyles from "./style";
import { GlobalUser } from "../../stores/User";
import { UserMenu} from "./UserMenu";

export const DashboardHeader = () => {
  const styles = useStyles();
  const globalUser = useRecoilValue(GlobalUser);
  // ユーザーメニューポップアップ追加
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleUsermenuClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleUsermenuClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setAnchorEl(null);
    navigate("/signout");
  };

  // レスポンシブ対応
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' })
  // Dialog用のステートと関数
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar color="inherit" elevation={1}>
      <Toolbar className={styles.between}>
        <div className={styles.flex}>
          {/* <IconButton>
            <MenuIcon />
          </IconButton> */}
          <div className={styles.logo}>
            <Logo />
          </div>
        </div>

        {/* 768px以上の時は、そのままSearchBarを表示 */}
        {isDesktop && <SearchBar />}
        {/* 768px未満の時は、DialogとしてSearchBarを表示 */}
        {!isDesktop &&
          <>
            <IconButton onClick={handleClickOpen}><SearchIcon /></IconButton>
            <Dialog
              fullWidth={true}
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogContent>
                <SearchBar />
              </DialogContent>
            </Dialog>
          </>
        }

        <div className={styles.flex}>
          {globalUser ? (
            <>
              <Link to="/upload">
                <IconButton>
                  <UploadFileIcon />
                </IconButton>
              </Link>
              <IconButton className={styles.profileIcon} onClick={handleUsermenuClick}>
                <Avatar />
              </IconButton>
              <UserMenu name={globalUser.name} buttonRef={anchorEl} onClose={handleUsermenuClose} onLogout={handleLogout} />
            </>
          ) : (
            <Button variant="outlined" color="primary" href="/login">
              ログイン
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  )
}