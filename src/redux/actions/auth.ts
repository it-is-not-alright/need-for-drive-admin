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
import {
  AuthClearAction,
  AuthFailureAction,
  CheckAuthRequestAction,
  CheckAuthSuccessAction,
  LogInRequestAction,
  LogInSuccessAction,
  LogOutRequestAction,
  LogOutSuccessAction,
  SignInSuccessAction,
} from './types';

const signInSuccess = (): SignInSuccessAction => ({
  type: SIGN_IN_SUCCESS,
  payload: null,
});

const logInRequest = (payload: User): LogInRequestAction => ({
  type: LOG_IN_REQUEST,
  payload,
});

const logInSuccess = (): LogInSuccessAction => ({
  type: LOG_IN_SUCCESS,
  payload: null,
});

const logOutRequest = (): LogOutRequestAction => ({
  type: LOG_OUT_REQUEST,
  payload: null,
});

const logOutSuccess = (): LogOutSuccessAction => ({
  type: LOG_OUT_SUCCESS,
  payload: null,
});

const checkAuthRequest = (): CheckAuthRequestAction => ({
  type: CHECK_AUTH_REQUEST,
  payload: null,
});

const checkAuthSuccess = (payload: boolean): CheckAuthSuccessAction => ({
  type: CHECK_AUTH_SUCCESS,
  payload,
});

const authFailure = (payload: string): AuthFailureAction => ({
  type: AUTH_FAILURE,
  payload,
});

const authClear = (): AuthClearAction => ({
  type: AUTH_CLEAR,
  payload: null,
});

export {
  authClear,
  authFailure,
  checkAuthRequest,
  checkAuthSuccess,
  logInRequest,
  logInSuccess,
  logOutRequest,
  logOutSuccess,
  signInSuccess,
};
