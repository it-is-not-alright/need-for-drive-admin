import { User } from '~/src/api/types';

import {
  LOG_IN,
  LOG_OUT,
  RESET_REQUEST_ERROR,
  SET_AUTH_STATUS,
  SET_REQUEST_ERROR,
  VERIFY_TOKEN,
} from '../constants';
import { AuthStatus } from '../types';

type PayloadAction<T, P> = {
  type: T;
  payload: P;
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

type SetRequestErrorAction = PayloadAction<typeof SET_REQUEST_ERROR, string>;
type ResetRequestErrorAction = PayloadAction<typeof RESET_REQUEST_ERROR, null>;

type RequestErrorAction = SetRequestErrorAction | ResetRequestErrorAction;

export {
  AuthAction,
  LogInAction,
  LogOutAction,
  RequestErrorAction,
  ResetRequestErrorAction,
  SetAuthStatusAction,
  SetRequestErrorAction,
  VerifyTokenAction,
};
