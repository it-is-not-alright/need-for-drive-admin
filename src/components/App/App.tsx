import './style.scss';
import '../../assets/fonts/helvetica/style.scss';
import '../../assets/fonts/roboto/style.scss';

import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import AuthGuard from '../AuthGuard/AuthGuard';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import LogInPage from '../pages/LogInPage/LogInPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import { AppRoute } from './types';

const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));
const OrdersPage = lazy(() => import('../pages/OrdersPage/OrdersPage'));

function App() {
  return (
    <ErrorBoundary>
      <AuthGuard>
        <main>
          <Suspense>
            <Routes>
              <Route path={AppRoute.Main} element={<OrdersPage />} />
              <Route path={AppRoute.LogIn} element={<LogInPage />} />
              <Route path={AppRoute.SignIn} element={<SignInPage />} />
              <Route path={AppRoute.Orders} element={<OrdersPage />} />
              <Route path={AppRoute.Any} element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
      </AuthGuard>
    </ErrorBoundary>
  );
}

export default App;
