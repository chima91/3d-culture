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
        { path: "detail/:objId", element: <Detail /> }
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'signup', element: <Signup /> },
        { path: 'signout', element: <Signout /> },
        { path: 'forget', element: <ForgetPassForm /> },
        { path: '404', element: <div>Not Found</div> },
        { path: '*', element: <Navigate to='/404' /> }
      ]
    },
    { path: '*', element: <Navigate to='/404' /> }
  ])
}