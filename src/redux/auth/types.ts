import { User } from '~/src/api/types';

import { PayloadAction } from '../types';
import {
  AUTH_STATUS_CHANGED,
  LOG_IN_REQUESTED,
  LOG_OUT_REQUESTED,
  TOKEN_VERIFICATION_REQUESTED,
} from './constants';

enum AuthStatus {
  Unknown = 'UNKNOWN',
  Pending = 'PENDING',
  Authorized = 'AUTHORIZED',
  Unauthorized = 'UNAUTHORIZED',
  SignUpSuccess = 'SIGN_UP_SUCCESS',
  LogInSuccess = 'LOG_IN_REQUESTED_SUCCESS',
  LogInFailure = 'LOG_IN_REQUESTED_FAILURE',
}

type AuthState = {
  status: AuthStatus;
};

type TokenVerificationRequestedAction = PayloadAction<
  typeof TOKEN_VERIFICATION_REQUESTED,
  null
>;
type LogInRequestedAction = PayloadAction<typeof LOG_IN_REQUESTED, User>;
type LogOutRequestedAction = PayloadAction<typeof LOG_OUT_REQUESTED, null>;
type AuthStatusChangedAction = PayloadAction<
  typeof AUTH_STATUS_CHANGED,
  AuthStatus
>;

type AuthAction =
  | TokenVerificationRequestedAction
  | LogInRequestedAction
  | LogOutRequestedAction
  | AuthStatusChangedAction;

export {
  AuthAction,
  AuthState,
  AuthStatus,
  AuthStatusChangedAction,
  LogInRequestedAction,
  LogOutRequestedAction,
  TokenVerificationRequestedAction,
};
