type RequestState<T> = {
  data: T | null;
  pending: boolean;
  error: string | null;
};

type AuthState = {
  logIn: boolean;
  logOut: boolean;
  authorized: boolean;
  pending: boolean;
  error: string | null;
};

export { AuthState, RequestState };
