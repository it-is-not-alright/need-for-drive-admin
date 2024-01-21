import { User } from '~/src/api/types';

import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_RESET,
  LOG_IN_SUCCESS,
} from '../constants';
import {
  LogInFailureAction,
  LogInRequestAction,
  LogInResetAction,
  LogInSuccessAction,
} from './types';

const logInRequest = (payload: User): LogInRequestAction => ({
  type: LOG_IN_REQUEST,
  payload,
});

const logInSuccess = (): LogInSuccessAction => ({
  type: LOG_IN_SUCCESS,
  payload: null,
});

const logInFailure = (payload: string): LogInFailureAction => ({
  type: LOG_IN_FAILURE,
  payload,
});

const logInReset = (): LogInResetAction => ({
  type: LOG_IN_RESET,
  payload: null,
});

export { logInFailure, logInRequest, logInReset, logInSuccess };
