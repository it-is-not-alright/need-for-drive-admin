import { LogInAction } from '../actions/types';
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  RESET_AUTH_STATE,
} from '../constants';
import { RequestState } from './types';

const initialState: RequestState<boolean> = {
  data: null,
  pending: false,
  error: null,
};

const authReducer = (
  state: RequestState<boolean> = initialState,
  action: LogInAction = null,
): RequestState<boolean> => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return { ...state, pending: true };
    case LOG_IN_SUCCESS:
      return { ...state, data: action.payload, pending: false };
    case LOG_IN_FAILURE:
      return { ...state, pending: false, error: action.payload };
    case RESET_AUTH_STATE:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
