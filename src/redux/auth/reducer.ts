import { LOG_IN, LOG_OUT, SET_AUTH_STATUS, VERIFY_TOKEN } from './constants';
import { AuthAction, AuthState, AuthStatus } from './types';

const initialState: AuthState = {
  status: AuthStatus.Pending,
};

const authReducer = (
  state: AuthState = initialState,
  action: AuthAction = null,
): AuthState => {
  switch (action.type) {
    case VERIFY_TOKEN:
    case LOG_IN:
    case LOG_OUT:
      return { status: AuthStatus.Pending };
    case SET_AUTH_STATUS:
      return { status: action.payload };
    default:
      return state;
  }
};

export default authReducer;
