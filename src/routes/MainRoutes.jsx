import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
import ProtectedRoute from './ProtectedRoute';

// render - Dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));

// render - Users
const UsersPage = Loadable(lazy(() => import('pages/Users/UsersPage')));

// render - Alerts
const AlertsPage = Loadable(lazy(() => import('pages/Alerts/AlertsPage')));

// render - Reports
const ReportsPage = Loadable(lazy(() => import('pages/Reports/ReportsPage')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <ProtectedRoute element={<DashboardLayout />} />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      element: <DashboardDefault />
    },
    {
      path: 'users',
      element: <UsersPage />
    },
    {
      path: 'alerts',
      element: <AlertsPage />
    },
    {
      path: 'reports',
      element: <ReportsPage />
    }
  ]
};

export default MainRoutes;
