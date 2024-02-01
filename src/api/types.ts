enum Endpoint {
  LogIn = 'auth/login',
  Refresh = 'auth/refresh',
  LogOut = 'auth/logout',
}

type AuthRaw = {
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

type Entity = {
  id: number;
  label: string;
};

type CarRaw = {
  id: number;
  name: string;
  thumbnail: {
    path: string;
  };
};

type CityRaw = {
  id: number;
  name: string;
};

type PointRaw = {
  id: number;
  name: string;
  address: string;
};

type OrderRaw = {
  id: number;
  color: string;
  dateFrom: string;
  dateTo: string;
  isFullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
  price: number;
  carId: CarRaw;
  cityId: CityRaw;
  pointId: PointRaw;
};

export {
  AuthRaw,
  Endpoint,
  Entity,
  OrderRaw,
  RequestError,
  RequestOptions,
  RequestResult,
  User,
};
