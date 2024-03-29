import { VFC } from 'react';
import { Outlet } from 'react-router-dom';

import { DashboardHeader } from '../../templates/DashboardHeader';
import { Sidebar } from '../../templates/Sidebar';

import useStyles from './style';

export const HomeLayout: VFC = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <DashboardHeader />
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
};
