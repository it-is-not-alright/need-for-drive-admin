import { matchPath } from 'react-router-dom';

import { AppRoute } from './types';

class RouteUtil {
  static logIn: AppRoute = { path: '/login' };

  static signUp: AppRoute = { path: '/signup' };

  static any: AppRoute = { path: '*' };

  static main: AppRoute = { path: '/', mirror: '/main' };

  static orders: AppRoute = { path: '/orders', mirror: '/' };

  static cars: AppRoute = { path: '/cars' };

  static match(route: AppRoute, path: string) {
    if (route.mirror && matchPath(route.mirror, path)) {
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
