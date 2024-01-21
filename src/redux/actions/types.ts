import { User } from '~/src/api/types';

import {
  CHECK_AUTH_FAILURE,
  CHECK_AUTH_REQUEST,
  CHECK_AUTH_RESET,
  CHECK_AUTH_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_RESET,
  LOG_IN_SUCCESS,
} from '../constants';

type PayloadAction<T, P> = {
  type: T;
  payload: P;
};

type LogInRequestAction = PayloadAction<typeof LOG_IN_REQUEST, User>;
type LogInSuccessAction = PayloadAction<typeof LOG_IN_SUCCESS, null>;
type LogInFailureAction = PayloadAction<typeof LOG_IN_FAILURE, string>;
type LogInResetAction = PayloadAction<typeof LOG_IN_RESET, null>;

type LogInAction =
  | LogInRequestAction
  | LogInSuccessAction
  | LogInFailureAction
  | LogInResetAction;

type CheckAuthRequestAction = PayloadAction<typeof CHECK_AUTH_REQUEST, null>;
type CheckAuthSuccessAction = PayloadAction<typeof CHECK_AUTH_SUCCESS, boolean>;
type CheckAuthFailureAction = PayloadAction<typeof CHECK_AUTH_FAILURE, string>;
type CheckAuthResetAction = PayloadAction<typeof CHECK_AUTH_RESET, null>;

type CheckAuthAction =
  | CheckAuthRequestAction
  | CheckAuthSuccessAction
  | CheckAuthFailureAction
  | CheckAuthResetAction;

export {
  CheckAuthAction,
  CheckAuthFailureAction,
  CheckAuthRequestAction,
  CheckAuthResetAction,
  CheckAuthSuccessAction,
  LogInAction,
  LogInFailureAction,
  LogInRequestAction,
  LogInResetAction,
  LogInSuccessAction,
};
