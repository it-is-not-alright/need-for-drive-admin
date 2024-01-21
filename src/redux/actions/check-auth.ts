import {
  CHECK_AUTH_FAILURE,
  CHECK_AUTH_REQUEST,
  CHECK_AUTH_RESET,
  CHECK_AUTH_SUCCESS,
} from '../constants';
import {
  CheckAuthFailureAction,
  CheckAuthRequestAction,
  CheckAuthResetAction,
  CheckAuthSuccessAction,
} from './types';

const checkAuthRequest = (): CheckAuthRequestAction => ({
  type: CHECK_AUTH_REQUEST,
  payload: null,
});

const checkAuthSuccess = (payload: boolean): CheckAuthSuccessAction => ({
  type: CHECK_AUTH_SUCCESS,
  payload,
});

const checkAuthFailure = (payload: string): CheckAuthFailureAction => ({
  type: CHECK_AUTH_FAILURE,
  payload,
});

const checkAuthReset = (): CheckAuthResetAction => ({
  type: CHECK_AUTH_RESET,
  payload: null,
});

export { checkAuthFailure, checkAuthRequest, checkAuthReset, checkAuthSuccess };
