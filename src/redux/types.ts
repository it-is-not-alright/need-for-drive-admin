enum AuthStatus {
  Unknown = 'UNKNOWN',
  Pending = 'PENDING',
  Authorized = 'AUTHORIZED',
  Unauthorized = 'UNAUTHORIZED',
  SignUpSuccess = 'SIGN_UP_SUCCESS',
  LogInSuccess = 'LOG_IN_SUCCESS',
  LogInFailure = 'LOG_IN_FAILURE',
}

type AuthState = {
  status: AuthStatus;
};

type RequestError = {
  badStatus: string | null;
};

export { AuthState, AuthStatus, RequestError };
