import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import MuseumIcon from '@material-ui/icons/Museum';

import useStyles from "./style";

export const Sidebar = () => {
  const styles = useStyles();

  return (
    <List className={styles.root} component="nav">
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="ホーム" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <WhatshotIcon />
        </ListItemIcon>
        <ListItemText primary="トレンド" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <MuseumIcon />
        </ListItemIcon>
        <ListItemText primary="博物館一覧" />
      </ListItem>
    </List>
  )
}