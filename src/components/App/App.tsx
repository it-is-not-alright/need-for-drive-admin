import './style.scss';
import '~/assets/fonts/roboto/style.scss';
import '~/assets/fonts/poppins/style.scss';

import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { verifyToken } from '~/src/redux/actions/auth';
import { authSelector } from '~/src/redux/selectors/auth';
import { AuthStatus } from '~/src/redux/types';

import AuthWrapper from '../AuthWrapper/AuthWrapper';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LogInPage from '../pages/LogInPage/LogInPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import OrdersPage from '../pages/OrdersPage/OrdersPage';
import SideBar from '../SideBar/SideBar';
import RouteUtil from './route-util';

const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const CarsPage = lazy(() => import('../pages/CarsPage/CarsPage'));

function App() {
  const { status } = useSelector(authSelector);
  const dispatch = useDispatch();
  const isAuthorized = status === AuthStatus.Authorized;

  useEffect(() => {
    dispatch(verifyToken());
  }, []);

  return (
    <HashRouter>
      <SideBar isDisplayed={isAuthorized} />
      <Header isDisplayed={isAuthorized} />
      <main>
        <ErrorBoundary>
          <Suspense>
            <Routes>
              <Route path={RouteUtil.logIn.path} element={<LogInPage />} />
              <Route path={RouteUtil.signUp.path} element={<SignUpPage />} />
              <Route path={RouteUtil.any.path} element={<NotFoundPage />} />
              <Route element={<AuthWrapper status={status} />}>
                <Route path={RouteUtil.main.path} element={<OrdersPage />} />
                <Route path={RouteUtil.orders.path} element={<OrdersPage />} />
                <Route path={RouteUtil.cars.path} element={<CarsPage />} />
              </Route>
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <Footer isDisplayed={isAuthorized} />
      </main>
    </HashRouter>
  );
}

export default App;
