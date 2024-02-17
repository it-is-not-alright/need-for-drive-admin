import React from 'react';
import { createHashRouter } from 'react-router-dom';

import AuthorizationRoutes from '../components/AuthorizationRoutes/AuthorizationRoutes';
import Layout from '../components/Layout/Layout';
import CarsPage from '../components/pages/CarsPage/CarsPage';
import LogInPage from '../components/pages/LogInPage/LogInPage';
import NotFoundPage from '../components/pages/NotFoundPage/NotFoundPage';
import OrdersPage from '../components/pages/OrdersPage/OrdersPage';
import PointsPage from '../components/pages/PointsPage/PointsPage';
import SignUpPage from '../components/pages/SignUpPage/SignUpPage';
import PrivateRoutes from '../components/PrivateRoutes/PrivateRoutes';
import RouteUtil from './util';

const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      {
        path: RouteUtil.any.path,
        element: <NotFoundPage />,
      },
      {
        element: <AuthorizationRoutes />,
        children: [
          {
            path: RouteUtil.logIn.path,
            element: <LogInPage />,
          },
          {
            path: RouteUtil.signUp.path,
            element: <SignUpPage />,
          },
        ],
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: RouteUtil.main.path,
            element: <OrdersPage />,
          },
          {
            path: RouteUtil.orders.path,
            element: <OrdersPage />,
          },
          {
            path: RouteUtil.cars.path,
            element: <CarsPage />,
          },
          {
            path: RouteUtil.points.path,
            element: <PointsPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
