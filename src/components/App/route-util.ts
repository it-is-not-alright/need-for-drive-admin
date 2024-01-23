import { matchPath } from 'react-router-dom';

import { AppRoute } from './types';

class RouteUtil {
  static logIn: AppRoute = {
    path: '/login',
    private: false,
  };

  static signIn: AppRoute = {
    path: '/signin',
    private: false,
  };

  static any: AppRoute = {
    path: '*',
    private: false,
  };

  static main: AppRoute = {
    path: '/',
    private: false,
    proxy: '/main',
  };

  static orders: AppRoute = {
    path: '/orders',
    private: false,
    proxy: '/',
  };

  static cars: AppRoute = {
    path: '/cars',
    private: false,
  };

  static match(route: AppRoute, path: string) {
    if (route.proxy && matchPath(route.proxy, path)) {
      return true;
    }
    return matchPath(route.path, path);
  }

  static isActive(route: AppRoute, location: string) {
    return RouteUtil.match(route, location) !== null;
  }

  static isPrivate(location: string) {
    return (
      location === RouteUtil.main.path ||
      location === RouteUtil.orders.path ||
      location === RouteUtil.cars.path
    );
  }
}

export default RouteUtil;
