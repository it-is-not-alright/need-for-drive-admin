import { LogInAction } from '../actions/types';
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_RESET,
  LOG_IN_SUCCESS,
} from '../constants';
import { RequestState } from './types';

const initialState: RequestState<boolean | null> = {
  data: null,
  pending: false,
  error: null,
};

const logInReducer = (
  state: RequestState<boolean | null> = initialState,
  action: LogInAction = null,
): RequestState<boolean | null> => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return { ...state, pending: true };
    case LOG_IN_SUCCESS:
      return { ...state, data: true, pending: false };
    case LOG_IN_FAILURE:
      return { ...state, pending: false, error: action.payload };
    case LOG_IN_RESET:
      return initialState;
    default:
      return state;
  }
};

export default logInReducer;
