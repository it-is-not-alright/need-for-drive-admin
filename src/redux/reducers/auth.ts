import { AuthAction } from '../actions/types';
import {
  AUTH_CLEAR,
  AUTH_FAILURE,
  CHECK_AUTH_REQUEST,
  CHECK_AUTH_SUCCESS,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_SUCCESS,
} from '../constants';
import { AuthState } from './types';

const initialState: AuthState = {
  logInSuccess: false,
  signUpSuccess: false,
  authorized: null,
  pending: false,
  error: null,
};

const checkAuthReducer = (
  state: AuthState = initialState,
  action: AuthAction = null,
): AuthState => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return { ...initialState, signUpSuccess: true };
    case LOG_IN_REQUEST:
    case LOG_OUT_REQUEST:
    case CHECK_AUTH_REQUEST:
      return { ...state, pending: true };
    case LOG_IN_SUCCESS:
      return { ...state, logInSuccess: true, authorized: true, pending: false };
    case LOG_OUT_SUCCESS:
      return { ...state, authorized: false, pending: false };
    case CHECK_AUTH_SUCCESS:
      return { ...state, authorized: action.payload, pending: false };
    case AUTH_FAILURE:
      return { ...state, pending: false, error: action.payload };
    case AUTH_CLEAR:
      return { ...initialState, authorized: state.authorized };
    default:
      return state;
  }
};

export default checkAuthReducer;
