import { RESET_REQUEST_ERROR, SET_REQUEST_ERROR } from '../constants';
import { ResetRequestErrorAction, SetRequestErrorAction } from './types';

const setRequestError = (payload: string): SetRequestErrorAction => ({
  type: SET_REQUEST_ERROR,
  payload,
});

const resetRequestError = (): ResetRequestErrorAction => ({
  type: RESET_REQUEST_ERROR,
  payload: null,
});

export { resetRequestError, setRequestError };
