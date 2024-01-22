import { AppRoute } from '../App/types';

const isPrivateRoute = (route: string): boolean => {
  return route === AppRoute.Main || route === AppRoute.Orders;
};

export { isPrivateRoute };
