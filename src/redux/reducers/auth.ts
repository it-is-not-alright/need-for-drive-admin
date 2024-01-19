import { LogInAction } from '../actions/types';
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_RESET,
  LOG_IN_SUCCESS,
} from '../constants';
import { RequestState } from './types';

const initialState: RequestState<null> = {
  data: null,
  pending: false,
  error: null,
};

const authReducer = (
  state: RequestState<null> = initialState,
  action: LogInAction = null,
): RequestState<null> => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return { ...state, pending: true };
    case LOG_IN_SUCCESS:
      return { ...state, data: action.payload, pending: false };
    case LOG_IN_FAILURE:
      return { ...state, pending: false, error: action.payload };
    case LOG_IN_RESET:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
