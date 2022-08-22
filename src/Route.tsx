import { VFC } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

import { HomeLayout } from './layouts/Home';
import { SideLessHomeLayout } from './layouts/SidelessHome';
import { SimpleLayout } from './layouts/Simple';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Upload } from './pages/Upload';
import { Profile } from './pages/Profile';
import { Channels } from './pages/Channels';

import { Detail } from './pages/Detail';
import { ModelUpdate } from './pages/ModelUpdate';

import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Signout } from './pages/Signout';
import { ForgetPassForm } from './pages/ForgetPassForm';
import { NotFound } from './pages/NotFound';

export const RootRouter: VFC = () =>
  useRoutes([
    {
      element: <HomeLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'upload', element: <Upload /> },
        { path: 'profile', element: <Profile /> },
        { path: 'channels', element: <Channels /> },
      ],
    },
    {
      element: <SideLessHomeLayout />,
      children: [
        { path: 'detail', element: <Navigate to='/' /> },
        { path: 'detail/:objId', element: <Detail /> },
        { path: 'detail/:objId/update', element: <ModelUpdate /> },
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'signup', element: <Signup /> },
        { path: 'signout', element: <Signout /> },
        { path: 'forget', element: <ForgetPassForm /> },
        { path: '404', element: <NotFound /> },
      ],
    },

    { path: '*', element: <Navigate to='/404' /> },
  ]);
