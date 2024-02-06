import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { authSelector } from '~/src/redux/auth/selectors';
import { AuthStatus } from '~/src/redux/auth/types';

import RouteUtil from '../../route/util';
import Spinner from '../common/Spinner/Spinner';

function AuthorizationRoutes() {
  const { status } = useSelector(authSelector);

  if (status === AuthStatus.Pending) {
    return <Spinner />;
  }

  if (status === AuthStatus.Authorized) {
    return <Navigate to={RouteUtil.main.path} replace />;
  }

  return <Outlet />;
}

export default AuthorizationRoutes;
