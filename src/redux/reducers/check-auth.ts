import { CheckAuthAction } from '../actions/types';
import {
  CHECK_AUTH_FAILURE,
  CHECK_AUTH_REQUEST,
  CHECK_AUTH_RESET,
  CHECK_AUTH_SUCCESS,
} from '../constants';
import { RequestState } from './types';

const initialState: RequestState<boolean | null> = {
  data: null,
  pending: false,
  error: null,
};

const checkAuthReducer = (
  state: RequestState<boolean | null> = initialState,
  action: CheckAuthAction = null,
): RequestState<boolean | null> => {
  switch (action.type) {
    case CHECK_AUTH_REQUEST:
      return { ...state, pending: true };
    case CHECK_AUTH_SUCCESS:
      return { ...state, data: action.payload, pending: false };
    case CHECK_AUTH_FAILURE:
      return { ...state, pending: false, error: action.payload };
    case CHECK_AUTH_RESET:
      return initialState;
    default:
      return state;
  }
};

export default checkAuthReducer;
