import { Divider, Menu, MenuItem } from '@material-ui/core';
import ExitToAppRounded from '@material-ui/icons/ExitToAppRounded';
import { VFC } from 'react';
import { useNavigate } from 'react-router-dom';
import useStyles from './style';

export type UserMenuProps = {
  name?: string;
  buttonRef: HTMLElement | null;
  onClose: () => void;
  onLogout: () => void;
};

export const UserMenu: VFC<UserMenuProps> = ({
  name = 'NO NAME',
  buttonRef,
  onClose,
  onLogout,
}) => {
  const styles = useStyles();

  const navigate = useNavigate();
  const gotoPage = (url: string) => {
    onClose();
    navigate(url);
  };

  return (
    <Menu
      id='user-menu'
      anchorEl={buttonRef}
      keepMounted
      open={Boolean(buttonRef)}
      onClose={onClose}
    >
      <div className={styles.name}>
        {name}
        <span className={styles.nameSpan}>さん</span>
      </div>
      <Divider />
      <MenuItem onClick={() => gotoPage('/profile')}>プロフィール編集</MenuItem>
      <MenuItem onClick={() => gotoPage('/channels')}>登録チャンネル</MenuItem>
      <MenuItem onClick={onLogout}>
        ログアウト
        <ExitToAppRounded className={styles.logoutIcon} />
      </MenuItem>
    </Menu>
  );
};
