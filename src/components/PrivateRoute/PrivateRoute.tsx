import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { authSelector } from '~/src/redux/selectors/auth';
import { AuthStatus } from '~/src/redux/types';

import RouteUtil from '../../route/util';
import Spinner from '../common/Spinner/Spinner';

function PrivateRoute() {
  const { status } = useSelector(authSelector);

  if (status === AuthStatus.Pending) {
    return <Spinner />;
  }

  if (status === AuthStatus.Authorized) {
    return <Outlet />;
  }

  return <Navigate to={RouteUtil.logIn.path} replace />;
}

export default PrivateRoute;
