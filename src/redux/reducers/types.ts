type AuthState = {
  logInSuccess: boolean;
  signUpSuccess: boolean;
  authorized: boolean | null;
  pending: boolean;
  error: string | null;
};

export { AuthState };
