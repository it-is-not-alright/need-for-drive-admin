import { RequestError } from '~/src/api/types';

import { RESET_REQUEST_ERROR, SET_REQUEST_ERROR } from './constants';
import { RequestErrorAction } from './types';

const initialState: RequestError = {
  status: null,
  message: null,
};

const requestErrorReducer = (
  state: RequestError = initialState,
  action: RequestErrorAction = null,
): RequestError => {
  switch (action.type) {
    case SET_REQUEST_ERROR:
      return action.payload;
    case RESET_REQUEST_ERROR:
      return initialState;
    default:
      return state;
  }
};

export default requestErrorReducer;
