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

const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));
const OrderListPage = lazy(
  () => import('../pages/OrderListPage/OrderListPage'),
);
const CarListPage = lazy(() => import('../pages/CarListPage/CarListPage'));

function App() {
  return (
    <ErrorBoundary>
      <AuthGuard>
        <main>
          <Suspense>
            <Routes>
              <Route path={RouteUtil.main.path} element={<OrderListPage />} />
              <Route path={RouteUtil.logIn.path} element={<LogInPage />} />
              <Route path={RouteUtil.signIn.path} element={<SignInPage />} />
              <Route path={RouteUtil.orders.path} element={<OrderListPage />} />
              <Route path={RouteUtil.cars.path} element={<CarListPage />} />
              <Route path={RouteUtil.any.path} element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
      </AuthGuard>
    </ErrorBoundary>
  );
}

export default App;
