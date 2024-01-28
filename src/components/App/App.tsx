import './style.scss';
import '../../assets/fonts/helvetica/style.scss';
import '../../assets/fonts/roboto/style.scss';

import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { verifyToken } from '~/src/redux/actions/auth';

import AuthWrapper from '../AuthWrapper/AuthWrapper';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import LogInPage from '../pages/LogInPage/LogInPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import OrdersPage from '../pages/OrdersPage/OrdersPage';
import { AppRoute } from './types';

const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
  }, []);

  return (
    <ErrorBoundary>
      <Suspense>
        <Routes>
          <Route path={AppRoute.LogIn} element={<LogInPage />} />
          <Route path={AppRoute.SignUp} element={<SignUpPage />} />
          <Route path={AppRoute.Any} element={<NotFoundPage />} />
          <Route element={<AuthWrapper />}>
            <Route path={AppRoute.Main} element={<OrdersPage />} />
            <Route path={AppRoute.Orders} element={<OrdersPage />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
