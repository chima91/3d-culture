import { VFC } from 'react';
import { Outlet } from 'react-router-dom';

import { DashboardHeader } from '../../templates/DashboardHeader';
import useStyles from './style';

export const SideLessHomeLayout: VFC = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <DashboardHeader />
      {/*
        <Outlet />を配置した箇所にchildlenコンポーネントが展開される。
        childrenコンポーネントとは、Route.tsx内でchildren > element で指定したコンポーネントである
      */}
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
};
