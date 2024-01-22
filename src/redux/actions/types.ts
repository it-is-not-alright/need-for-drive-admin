import { User } from '~/src/api/types';

import {
  AUTH_CLEAR,
  AUTH_FAILURE,
  CHECK_AUTH_REQUEST,
  CHECK_AUTH_SUCCESS,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_IN_SUCCESS,
} from '../constants';

type PayloadAction<T, P> = {
  type: T;
  payload: P;
};

type SignInSuccessAction = PayloadAction<typeof SIGN_IN_SUCCESS, null>;

type LogInRequestAction = PayloadAction<typeof LOG_IN_REQUEST, User>;
type LogInSuccessAction = PayloadAction<typeof LOG_IN_SUCCESS, null>;

type LogOutRequestAction = PayloadAction<typeof LOG_OUT_REQUEST, null>;
type LogOutSuccessAction = PayloadAction<typeof LOG_OUT_SUCCESS, null>;

type CheckAuthRequestAction = PayloadAction<typeof CHECK_AUTH_REQUEST, null>;
type CheckAuthSuccessAction = PayloadAction<typeof CHECK_AUTH_SUCCESS, boolean>;

type AuthFailureAction = PayloadAction<typeof AUTH_FAILURE, string>;
type AuthClearAction = PayloadAction<typeof AUTH_CLEAR, null>;

type AuthAction =
  | SignInSuccessAction
  | LogInRequestAction
  | LogInSuccessAction
  | LogOutRequestAction
  | LogOutSuccessAction
  | CheckAuthRequestAction
  | CheckAuthSuccessAction
  | AuthFailureAction
  | AuthClearAction;

export {
  AuthAction,
  AuthClearAction,
  AuthFailureAction,
  CheckAuthRequestAction,
  CheckAuthSuccessAction,
  LogInRequestAction,
  LogInSuccessAction,
  LogOutRequestAction,
  LogOutSuccessAction,
  SignInSuccessAction,
};
