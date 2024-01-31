import { PayloadAction } from '../types';
import { RESET_REQUEST_ERROR, SET_REQUEST_ERROR } from './constants';

type RequestError = {
  badStatus: string | null;
};

type SetRequestErrorAction = PayloadAction<typeof SET_REQUEST_ERROR, string>;
type ResetRequestErrorAction = PayloadAction<typeof RESET_REQUEST_ERROR, null>;

type RequestErrorAction = SetRequestErrorAction | ResetRequestErrorAction;

export {
  RequestError,
  RequestErrorAction,
  ResetRequestErrorAction,
  SetRequestErrorAction,
};
