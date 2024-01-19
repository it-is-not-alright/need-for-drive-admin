import { User } from '~/src/api/types';

import {
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
type LogInSuccessAction = PayloadAction<typeof LOG_IN_SUCCESS, boolean>;
type LogInFailureAction = PayloadAction<typeof LOG_IN_FAILURE, string>;
type LogInResetAction = PayloadAction<typeof LOG_IN_RESET, null>;
type LogInAction =
  | LogInRequestAction
  | LogInSuccessAction
  | LogInFailureAction
  | LogInResetAction;

export {
  LogInAction,
  LogInFailureAction,
  LogInRequestAction,
  LogInResetAction,
  LogInSuccessAction,
};
