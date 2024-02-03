enum Endpoint {
  LogIn = 'auth/login',
  Refresh = 'auth/refresh',
  LogOut = 'auth/logout',
}

type AuthData = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
  user_id: number;
};

type User = {
  username: string;
  password: string;
};

type RequestOptions = {
  headers?: HeadersInit;
  body?: unknown;
};

type RequestError = {
  status: number;
  message: string;
};

type RequestResult<T> = {
  error?: RequestError;
  content?: T;
};

export {
  AuthData,
  Endpoint,
  RequestError,
  RequestOptions,
  RequestResult,
  User,
};
