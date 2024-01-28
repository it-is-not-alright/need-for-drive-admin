import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { authSelector } from '~/src/redux/selectors/auth';
import { AuthStatus } from '~/src/redux/types';

import { AppRoute } from '../App/types';
import Spinner from '../common/Spinner/Spinner';

function AuthWrapper() {
  const { status } = useSelector(authSelector);

  if (status === AuthStatus.Pending) {
    return <Spinner />;
  }

  if (status === AuthStatus.Authorized) {
    return (
      <>
        <header>Header</header>
        <main>
          <Outlet />
        </main>
      </>
    );
  }

  return <Navigate to={AppRoute.LogIn} replace />;
}

export default AuthWrapper;
