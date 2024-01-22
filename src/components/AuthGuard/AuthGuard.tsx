import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { authClear, checkAuthRequest } from '~/src/redux/actions/auth';
import { authSelector } from '~/src/redux/selectors/auth';

import { AppRoute } from '../App/types';
import Spinner from '../common/Spinner/Spinner';
import Header from '../Header/Header';
import { AuthGuardProps } from './types';
import { isPrivateRoute } from './util';

function AuthGuard({ children }: AuthGuardProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const authState = useSelector(authSelector);
  const routeIsPrivate = isPrivateRoute(location.pathname);

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
      navigate(AppRoute.LogIn);
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
      <Header />
      {children}
    </>
  );
}

export default AuthGuard;
