enum Endpoint {
  LogIn = 'auth/login',
  Refresh = 'auth/refresh',
  LogOut = 'auth/logout',
  Car = 'db/car',
  City = 'db/city',
  OrderStatus = 'db/orderStatus',
  Order = 'db/order',
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

type OrderStatusRaw = {
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
  orderStatusId: OrderStatusRaw;
};

export {
  ArrayRequestData,
  AuthRaw,
  CarRaw,
  CityRaw,
  Endpoint,
  OrderRaw,
  OrderStatusRaw,
  RequestError,
  RequestOptions,
  RequestResult,
  User,
};
