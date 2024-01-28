import { User } from '~/src/api/types';

import { LOG_IN, LOG_OUT, SET_AUTH_STATUS, VERIFY_TOKEN } from '../constants';
import { AuthStatus } from '../types';
import {
  LogInAction,
  LogOutAction,
  SetAuthStatusAction,
  VerifyTokenAction,
} from './types';

const logIn = (payload: User): LogInAction => ({
  type: LOG_IN,
  payload,
});

const verifyToken = (): VerifyTokenAction => ({
  type: VERIFY_TOKEN,
  payload: null,
});

const logOut = (): LogOutAction => ({
  type: LOG_OUT,
  payload: null,
});

const setAuthStatus = (payload: AuthStatus): SetAuthStatusAction => ({
  type: SET_AUTH_STATUS,
  payload,
});

export { logIn, logOut, setAuthStatus, verifyToken };
