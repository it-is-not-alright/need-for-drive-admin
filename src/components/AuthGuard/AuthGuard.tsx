import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  checkAuthRequest,
  checkAuthReset,
} from '~/src/redux/actions/check-auth';
import { checkAuthSelector } from '~/src/redux/selectors/check-auth';

import { AppRoute } from '../App/types';
import { AuthGuardProps } from './types';
import { isPrivateRoute } from './util';

function AuthGuard({ children }: AuthGuardProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const checkAuthState = useSelector(checkAuthSelector);

  useEffect(() => {
    dispatch(checkAuthRequest());
  }, []);

  useEffect(() => {
    if (checkAuthState.error) {
      dispatch(checkAuthReset());
      throw new Error(checkAuthState.error);
    } else if (checkAuthState.data === false) {
      dispatch(checkAuthReset());
      navigate(AppRoute.LogIn);
    }
  }, [checkAuthState]);

  if (checkAuthState.pending) {
    return <p>loading...</p>;
  }

  if (!isPrivateRoute(location.pathname)) {
    return children;
  }

  return children;
}

export default AuthGuard;
