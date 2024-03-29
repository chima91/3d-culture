import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Toolbar,
  Dialog,
  DialogContent,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useState, MouseEvent, VFC } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Logo } from '../../components/Logo';
import { GlobalUser } from '../../stores/User';

import { SearchBar } from './SearchBar';
import useStyles from './style';
import { UserMenu } from './UserMenu';

export const DashboardHeader: VFC = () => {
  const styles = useStyles();
  const globalUser = useRecoilValue(GlobalUser);

  // ユーザーメニューポップアップ
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
    navigate('/signout');
  };

  // レスポンシブ対応
  const isDesktop: boolean = useMediaQuery({ minWidth: 768 });
  // Dialog用のステートと関数
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar color='inherit' elevation={1}>
      <Toolbar className={styles.between}>
        <div className={styles.flex}>
          <div className={styles.logo}>
            <Logo />
          </div>
        </div>

        {/* 768px以上の時は、そのままSearchBarを表示 */}
        {isDesktop && <SearchBar />}
        {/* 768px未満の時は、DialogとしてSearchBarを表示 */}
        {!isDesktop && (
          <>
            <IconButton onClick={handleClickOpen}>
              <SearchIcon />
            </IconButton>
            <Dialog
              fullWidth
              open={open}
              onClose={handleClose}
              aria-labelledby='responsive-dialog-title'
            >
              <DialogContent>
                <SearchBar />
              </DialogContent>
            </Dialog>
          </>
        )}

        <div className={styles.flex}>
          {globalUser ? (
            <>
              <Link to='/upload'>
                <IconButton>
                  <UploadFileIcon />
                </IconButton>
              </Link>
              <IconButton
                className={styles.profileIcon}
                onClick={handleUsermenuClick}
              >
                <Avatar src={globalUser.profile_photo_url || ''} />
              </IconButton>
              <UserMenu
                name={globalUser.name}
                buttonRef={anchorEl}
                onClose={handleUsermenuClose}
                onLogout={handleLogout}
              />
            </>
          ) : (
            <Button variant='outlined' color='primary' href='/login'>
              ログイン
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};
