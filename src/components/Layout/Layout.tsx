import './style.scss';
import '~/assets/fonts/roboto/style.scss';
import '~/assets/fonts/poppins/style.scss';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';

import { requestTokenVerification } from '~/src/redux/auth/actions';
import { authSelector } from '~/src/redux/auth/selectors';
import { AuthStatus } from '~/src/redux/auth/types';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

function Layout() {
  const { status } = useSelector(authSelector);
  const dispatch = useDispatch();
  const location = useLocation();
  const isAuthorized = status === AuthStatus.Authorized;

  useEffect(() => {
    dispatch(requestTokenVerification());
  }, []);

  return (
    <>
      <SideBar isDisplayed={isAuthorized} />
      <Header isDisplayed={isAuthorized} />
      <main>
        <ErrorBoundary key={location.pathname}>
          <Outlet />
        </ErrorBoundary>
        <Footer isDisplayed={isAuthorized} />
      </main>
    </>
  );
}

export default Layout;
