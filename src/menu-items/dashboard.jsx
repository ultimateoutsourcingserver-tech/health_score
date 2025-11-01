// assets
import { AlertOutlined, DashboardOutlined, FileTextOutlined, TeamOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  TeamOutlined,
  AlertOutlined,
  FileTextOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'users',
      title: 'Users',
      type: 'item',
      url: '/users',
      icon: icons.TeamOutlined,
      breadcrumbs: false
    },
    {
      id: 'alerts',
      title: 'Alerts',
      type: 'item',
      url: '/alerts',
      icon: icons.AlertOutlined,
      breadcrumbs: false
    },
    {
      id: 'reports',
      title: 'Reports',
      type: 'item',
      url: '/reports',
      icon: icons.FileTextOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
