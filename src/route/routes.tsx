import React from 'react';
import { createHashRouter } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import CarsPage from '../components/pages/CarsPage/CarsPage';
import LogInPage from '../components/pages/LogInPage/LogInPage';
import NotFoundPage from '../components/pages/NotFoundPage/NotFoundPage';
import OrdersPage from '../components/pages/OrdersPage/OrdersPage';
import SignUpPage from '../components/pages/SignUpPage/SignUpPage';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import RouteUtil from './util';

const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      {
        path: RouteUtil.logIn.path,
        element: <LogInPage />,
      },
      {
        path: RouteUtil.signUp.path,
        element: <SignUpPage />,
      },
      {
        path: RouteUtil.any.path,
        element: <NotFoundPage />,
      },
      {
        element: <PrivateRoute />,
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
        ],
      },
    ],
  },
]);

export default router;
