import { User } from '~/src/api/types';

import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  RESET_AUTH_STATE,
} from '../constants';

type PayloadAction<T, P> = {
  type: T;
  payload: P;
};

type LogInRequestAction = PayloadAction<typeof LOG_IN_REQUEST, User>;
type LogInSuccessAction = PayloadAction<typeof LOG_IN_SUCCESS, boolean>;
type LogInFailureAction = PayloadAction<typeof LOG_IN_FAILURE, string>;
type ResetAuthStateAction = PayloadAction<typeof RESET_AUTH_STATE, null>;
type LogInAction =
  | LogInRequestAction
  | LogInSuccessAction
  | LogInFailureAction
  | ResetAuthStateAction;

export {
  LogInAction,
  LogInFailureAction,
  LogInRequestAction,
  LogInSuccessAction,
  ResetAuthStateAction,
};
