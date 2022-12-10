import { lazy } from 'react';

// ** Document title
const TemplateTitle = '%s - ERP';

// ** Default Route
// const DefaultRoute = `/home`;
const baseRoute = '/home';
const AllRoutes = [
  {
    path: '/home',
    component: lazy(() => import('../../views/Home')),
    exact: true,
  },
];

const DefaultRoute = `/home`;

export { DefaultRoute, TemplateTitle, AllRoutes, baseRoute };
