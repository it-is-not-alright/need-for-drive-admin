import { RequestError } from '~/src/api/types';

import { PayloadAction } from '../types';
import { RESET_REQUEST_ERROR, SET_REQUEST_ERROR } from './constants';

type SetRequestErrorAction = PayloadAction<
  typeof SET_REQUEST_ERROR,
  RequestError
>;
type ResetRequestErrorAction = PayloadAction<typeof RESET_REQUEST_ERROR, null>;

type RequestErrorAction = SetRequestErrorAction | ResetRequestErrorAction;

export { RequestErrorAction, ResetRequestErrorAction, SetRequestErrorAction };
