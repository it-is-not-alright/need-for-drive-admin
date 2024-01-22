type AuthState = {
  logInSuccess: boolean;
  signInSuccess: boolean;
  authorized: boolean | null;
  pending: boolean;
  error: string | null;
};

export { AuthState };
