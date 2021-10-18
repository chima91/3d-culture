import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

import { Logo } from "../../components/Logo";
import { SearchBar } from "./SearchBar";
import useStyles from "./style";
import { useUserByIdQuery } from "../../utils/graphql/generated";

export const DashboardHeader = () => {
  const styles = useStyles();

  const { data } = useUserByIdQuery({
    variables: { id: "test-id2" }
  });

  return (
    <div>
      <AppBar color="inherit" elevation={1}>
        <Toolbar className={styles.between}>
          <div className={styles.flex}>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Link to="/" className={styles.logo}>
              <Logo />
            </Link>
          </div>

          <SearchBar />

          {/* test */}
          <Typography>{data?.users_by_pk?.name}</Typography>

          <IconButton className={styles.profileIcon}>
            <Avatar />
          </IconButton>

        </Toolbar>
      </AppBar>
    </div>
  )
}