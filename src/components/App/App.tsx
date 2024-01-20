import './style.scss';
import '~/assets/fonts/helvetica/style.scss';
import '~/assets/fonts/roboto/style.scss';
import '~/assets/fonts/poppins/style.scss';

import React, { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Header from '../Header/Header';
import LogInPage from '../pages/LogInPage/LogInPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import { AppRoute } from './types';
import { isPublicRoute } from './util';

const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));
const OrdersPage = lazy(() => import('../pages/OrdersPage/OrdersPage'));

function App() {
  const location = useLocation();
  const routeIsPublic: boolean = isPublicRoute(location.pathname);

  return (
    <>
      <Header isDisplayed={!routeIsPublic} />
      <main>
        <ErrorBoundary>
          <Suspense>
            <Routes>
              <Route path={AppRoute.Main} element={<LogInPage />} />
              <Route path={AppRoute.LogIn} element={<LogInPage />} />
              <Route path={AppRoute.SignIn} element={<SignInPage />} />
              <Route path={AppRoute.Orders} element={<OrdersPage />} />
              <Route path={AppRoute.Any} element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
    </>
  );
}

export default App;
