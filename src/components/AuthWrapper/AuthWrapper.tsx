import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthStatus } from '~/src/redux/types';

import RouteUtil from '../App/route-util';
import Spinner from '../common/Spinner/Spinner';
import { AuthWrapperProps } from './types';

function AuthWrapper({ status }: AuthWrapperProps) {
  if (status === AuthStatus.Pending) {
    return <Spinner />;
  }

  if (status === AuthStatus.Authorized) {
    return <Outlet />;
  }

  return <Navigate to={RouteUtil.logIn.path} replace />;
}

export default AuthWrapper;
