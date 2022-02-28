import { useRoutes, Navigate } from "react-router-dom";

import { HomeLayout } from "./layouts/Home";
import { SideLessHomeLayout } from "./layouts/SidelessHome";
import { SimpleLayout } from "./layouts/Simple";
import { Detail } from "./pages/Detail";
import { ForgetPassForm } from "./pages/ForgetPassForm";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signout } from "./pages/Signout";
import { Signup } from "./pages/Signup";
import { Upload } from "./pages/Upload";
import { Channels } from "./pages/Channels";
import { Profile } from "./pages/Profile";

export const RootRouter = () => {
  return useRoutes([
    {
      element: <HomeLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'upload', element: <Upload /> },
        { path: 'profile', element: <Profile /> },
        { path: 'channels', element: <Channels /> },
      ],
    },
    {
      element: <SideLessHomeLayout />,
      children: [
        { path: 'detail', element: <Navigate to='/' /> },
        { path: 'detail/:objId', element: <Detail /> }
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        { path: 'login', element: <Login /> },
        // 一般の人が新規アカウントを作成できないよう一旦コメントアウトする(2/28)
        // { path: 'signup', element: <Signup /> },
        { path: 'signout', element: <Signout /> },
        { path: 'forget', element: <ForgetPassForm /> },
        { path: '404', element: <div>Not Found</div> },
        { path: '*', element: <Navigate to='/404' /> }
      ]
    },
    { path: '*', element: <Navigate to='/404' /> }
  ])
}