import { Outlet } from "react-router-dom";

import { DashboardHeader } from "../../templates/DashboardHeader";

export const SideLessHomeLayout = () => {
  return (
    <div>
      <DashboardHeader />
      {/*
        <Outlet />を配置した箇所にchildlenコンポーネントが展開される。
        childrenコンポーネントとは、Route.tsx内でchildren > element で指定したコンポーネントである
      */}
      <Outlet />
    </div>
  );
};