import { VFC } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { GlobalUser } from '../../stores/User';
import useStyles from './style';

export const Sidebar: VFC = () => {
  const styles = useStyles();
  const globalUser = useRecoilValue(GlobalUser);

  return (
    <List className={styles.root} component='nav'>
      <ListItem button component={Link} to='/'>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary='ホーム' />
      </ListItem>
      <Divider />
      <ListItem button component={Link} to='/about'>
        <ListItemIcon>
          <AccountBalanceIcon />
        </ListItemIcon>
        <ListItemText primary='3dimenculとは' />
      </ListItem>
      <Divider />
      {globalUser?.id && (
        <>
          <ListItem button component={Link} to='/channels'>
            <ListItemIcon>
              <SubscriptionsIcon />
            </ListItemIcon>
            <ListItemText primary='登録チャンネル' />
          </ListItem>
          <Divider />
        </>
      )}
    </List>
  );
};
