enum Endpoint {
  LogIn = 'auth/login',
  Refresh = 'auth/refresh',
  LogOut = 'auth/logout',
  Car = 'db/car',
  City = 'db/city',
  OrderStatus = 'db/orderStatus',
  Order = 'db/order',
  Point = 'db/point',
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

type CaregoryRaw = {
  id: number;
  name: string;
};

type CarRaw = {
  id: number;
  name: string;
  number: string;
  priceMax: number;
  priceMin: number;
  description: string;
  tank: string;
  colors: string[];
  thumbnail: {
    path: string;
  };
  categoryId: CaregoryRaw;
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
  cityId: CityRaw;
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
  PointRaw,
  RequestError,
  RequestOptions,
  RequestResult,
  User,
};
