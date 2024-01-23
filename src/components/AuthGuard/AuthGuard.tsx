import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { authClear, checkAuthRequest } from '~/src/redux/actions/auth';
import { authSelector } from '~/src/redux/selectors/auth';

import RouteUtil from '../App/route-util';
import Spinner from '../common/Spinner/Spinner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import { AuthGuardProps } from './types';

function AuthGuard({ children }: AuthGuardProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const authState = useSelector(authSelector);
  const routeIsPrivate = RouteUtil.isPrivate(location.pathname);

  const checkAuth = () => {
    dispatch(checkAuthRequest());
  };

  useEffect(() => {
    checkAuth();
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  useEffect(() => {
    if (authState.error && authState.error !== '401') {
      dispatch(authClear());
      throw new Error(authState.error);
    } else if (authState.authorized === false && routeIsPrivate) {
      navigate(RouteUtil.logIn.path);
    }
  }, [authState, routeIsPrivate]);

  if (!routeIsPrivate) {
    return children;
  }

  if (authState.pending) {
    return <Spinner />;
  }

  if (authState.authorized === false && routeIsPrivate) {
    return null;
  }

  return (
    <>
      <SideBar />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default AuthGuard;
