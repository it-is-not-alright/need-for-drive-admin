import { User } from '~/src/api/types';

import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  RESET_AUTH_STATE,
} from '../constants';
import {
  LogInFailureAction,
  LogInRequestAction,
  LogInSuccessAction,
  ResetAuthStateAction,
} from './types';

const logInRequest = (payload: User): LogInRequestAction => ({
  type: LOG_IN_REQUEST,
  payload,
});

const logInSuccess = (): LogInSuccessAction => ({
  type: LOG_IN_SUCCESS,
  payload: true,
});

const logInFailure = (payload: string): LogInFailureAction => ({
  type: LOG_IN_FAILURE,
  payload,
});

const resetAuthState = (): ResetAuthStateAction => ({
  type: RESET_AUTH_STATE,
  payload: null,
});

export { logInFailure, logInRequest, logInSuccess, resetAuthState };
