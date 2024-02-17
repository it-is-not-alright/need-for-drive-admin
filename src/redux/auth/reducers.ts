import {
  AUTH_STATUS_CHANGED,
  LOG_IN_REQUESTED,
  LOG_OUT_REQUESTED,
  TOKEN_VERIFICATION_REQUESTED,
} from './constants';
import { AuthAction, AuthState, AuthStatus } from './types';

const initialState: AuthState = {
  status: AuthStatus.Pending,
};

const authReducer = (
  state: AuthState = initialState,
  action: AuthAction = null,
): AuthState => {
  switch (action.type) {
    case TOKEN_VERIFICATION_REQUESTED:
    case LOG_IN_REQUESTED:
    case LOG_OUT_REQUESTED:
      return { status: AuthStatus.Pending };
    case AUTH_STATUS_CHANGED:
      return { status: action.payload };
    default:
      return state;
  }
};

export { authReducer };
