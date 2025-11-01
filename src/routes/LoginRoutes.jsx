import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';

// auth
const LoginPage = Loadable(lazy(() => import('pages/Login/LoginPage')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/login',
  element: <LoginPage />
};

export default LoginRoutes;
