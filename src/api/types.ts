enum Endpoint {
  LogIn = 'auth/login',
  Refresh = 'auth/refresh',
  LogOut = 'auth/logout',
  Car = 'db/car',
  City = 'db/city',
  OrderStatus = 'db/orderStatus',
  Order = 'db/order',
  Point = 'db/point',
  Category = 'db/category',
}

type RequestOptions = {
  headers?: HeadersInit;
  body?: unknown;
  params?: string;
};

type RequestError = {
  status: number;
  message: string;
};

type RequestResult<T> = {
  error?: RequestError;
  content?: T;
};

type ArrayRequestData<T> = {
  count: number;
  data: T[];
};

type ObjectRequestData<T> = {
  data: T;
};

export {
  ArrayRequestData,
  Endpoint,
  ObjectRequestData,
  RequestError,
  RequestOptions,
  RequestResult,
};
