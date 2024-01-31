import { User } from '~/src/api/types';

import { PayloadAction } from '../types';
import { LOG_IN, LOG_OUT, SET_AUTH_STATUS, VERIFY_TOKEN } from './constants';

enum AuthStatus {
  Unknown = 'UNKNOWN',
  Pending = 'PENDING',
  Authorized = 'AUTHORIZED',
  Unauthorized = 'UNAUTHORIZED',
  SignUpSuccess = 'SIGN_UP_SUCCESS',
  LogInSuccess = 'LOG_IN_SUCCESS',
  LogInFailure = 'LOG_IN_FAILURE',
}

type AuthState = {
  status: AuthStatus;
};

type VerifyTokenAction = PayloadAction<typeof VERIFY_TOKEN, null>;
type LogInAction = PayloadAction<typeof LOG_IN, User>;
type LogOutAction = PayloadAction<typeof LOG_OUT, null>;
type SetAuthStatusAction = PayloadAction<typeof SET_AUTH_STATUS, AuthStatus>;

type AuthAction =
  | VerifyTokenAction
  | LogInAction
  | LogOutAction
  | SetAuthStatusAction;

export {
  AuthAction,
  AuthState,
  AuthStatus,
  LogInAction,
  LogOutAction,
  SetAuthStatusAction,
  VerifyTokenAction,
};
