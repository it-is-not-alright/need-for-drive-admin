import { User } from '~/src/api/types';

import {
  AUTH_STATUS_CHANGED,
  LOG_IN_REQUESTED,
  LOG_OUT_REQUESTED,
  TOKEN_VERIFICATION_REQUESTED,
} from './constants';
import {
  AuthStatus,
  AuthStatusChangedAction,
  LogInRequestedAction,
  LogOutRequestedAction,
  TokenVerificationRequestedAction,
} from './types';

const requestLogIn = (user: User): LogInRequestedAction => ({
  type: LOG_IN_REQUESTED,
  payload: user,
});

const requestTokenVerification = (): TokenVerificationRequestedAction => ({
  type: TOKEN_VERIFICATION_REQUESTED,
  payload: null,
});

const requestLogOut = (): LogOutRequestedAction => ({
  type: LOG_OUT_REQUESTED,
  payload: null,
});

const setAuthStatus = (status: AuthStatus): AuthStatusChangedAction => ({
  type: AUTH_STATUS_CHANGED,
  payload: status,
});

export { requestLogIn, requestLogOut, requestTokenVerification, setAuthStatus };
