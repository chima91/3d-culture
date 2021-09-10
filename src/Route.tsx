import { useRoutes, Navigate } from "react-router-dom";

import { HomeLayout } from "./layouts/Home";
import { SideLessHomeLayout } from "./layouts/SidelessHome";
import { SimpleLayout } from "./layouts/Simple";
import { Home } from "./pages/Home";

export const RootRouter = () => {
  return useRoutes([
    {
      element: <HomeLayout />,
      children: [{ path: '/', element: <Home /> }],
    },
    {
      element: <SideLessHomeLayout />,
      children: [
        { path: "detail", element: <Navigate to='/' /> },
        { path: "detail/:objId", element: <div>detail</div> }
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        { path: 'login', element: <div>ログイン</div> },
        { path: 'signup', element: <div>アカウント新規作成</div> },
        { path: 'forget', element: <div>パスワードリセット</div> },
        { path: '404', element: <div>Not Found</div> },
        { path: '*', element: <Navigate to='/404' /> }
      ]
    },
    { path: '*', element: <Navigate to='/404' /> }
  ])
}