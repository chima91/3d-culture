import { Divider, ListItemIcon, Menu, MenuItem, Typography } from "@material-ui/core";
import ExitToAppRounded from "@material-ui/icons/ExitToAppRounded"
import { useNavigate } from "react-router";

export type UserMenuProps = {
  name?: string
  buttonRef: HTMLElement | null
  onClose: () => void
  onLogout: () => void
}

export const UserMenu = ({
  name = "NO NAME",
  buttonRef,
  onClose,
  onLogout
}: UserMenuProps) => {
  const navigate = useNavigate();
  const gotoPage = (url: string) => {
    onClose();
    navigate(url);
  };

  return (
    <div>
      <Menu
        id="user-menu"
        anchorEl={buttonRef}
        keepMounted
        open={Boolean(buttonRef)}
        onClose={onClose}
      >
        <MenuItem>{name}</MenuItem>
        <Divider />
        <MenuItem onClick={() => gotoPage("/")}>プロフィール編集</MenuItem>
        <MenuItem onClick={onLogout}>
          <ListItemIcon>
            <ExitToAppRounded fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            ログアウト
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  )
};