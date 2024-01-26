import './style.scss';
import '~/assets/fonts/roboto/style.scss';
import '~/assets/fonts/poppins/style.scss';

import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import AuthGuard from '../AuthGuard/AuthGuard';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import LogInPage from '../pages/LogInPage/LogInPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import RouteUtil from './route-util';

const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const OrdersPage = lazy(() => import('../pages/OrdersPage/OrdersPage'));
const CarsPage = lazy(() => import('../pages/CarsPage/CarsPage'));

function App() {
  return (
    <ErrorBoundary>
      <AuthGuard>
        <main>
          <Suspense>
            <Routes>
              <Route path={RouteUtil.main.path} element={<OrdersPage />} />
              <Route path={RouteUtil.logIn.path} element={<LogInPage />} />
              <Route path={RouteUtil.signUp.path} element={<SignUpPage />} />
              <Route path={RouteUtil.orders.path} element={<OrdersPage />} />
              <Route path={RouteUtil.cars.path} element={<CarsPage />} />
              <Route path={RouteUtil.any.path} element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
      </AuthGuard>
    </ErrorBoundary>
  );
}

export default App;
