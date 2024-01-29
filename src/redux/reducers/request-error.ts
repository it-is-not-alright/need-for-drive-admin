import { RequestErrorAction } from '../actions/types';
import { RESET_REQUEST_ERROR, SET_REQUEST_ERROR } from '../constants';
import { RequestError } from '../types';

const initialState: RequestError = {
  badStatus: null,
};

const requestErrorReducer = (
  state: RequestError = initialState,
  action: RequestErrorAction = null,
): RequestError => {
  switch (action.type) {
    case SET_REQUEST_ERROR:
      return { badStatus: action.payload };
    case RESET_REQUEST_ERROR:
      return initialState;
    default:
      return state;
  }
};

export default requestErrorReducer;
