import {
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core';
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
    <div>
      <Menu
        id='user-menu'
        anchorEl={buttonRef}
        keepMounted
        open={Boolean(buttonRef)}
        onClose={onClose}
      >
        <MenuItem className={styles.name}>
          {name}
          <span className={styles.nameSpan}>さん</span>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => gotoPage('/profile')}>
          プロフィール編集
        </MenuItem>
        <MenuItem onClick={() => gotoPage('/channels')}>
          登録チャンネル
        </MenuItem>
        <MenuItem onClick={onLogout}>
          <Typography variant='inherit' noWrap>
            ログアウト
          </Typography>
          <ListItemIcon>
            <ExitToAppRounded />
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </div>
  );
};
