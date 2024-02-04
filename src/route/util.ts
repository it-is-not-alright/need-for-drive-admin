import { matchPath } from 'react-router-dom';

import { AppRoute } from './types';

class RouteUtil {
  static logIn: AppRoute = { path: '/login' };

  static signUp: AppRoute = { path: '/signup' };

  static any: AppRoute = { path: '*' };

  static main: AppRoute = { path: '/', mirror: '/orders' };

  static orders: AppRoute = { path: '/orders', mirror: '/' };

  static cars: AppRoute = { path: '/cars' };

  static match(route: AppRoute, path: string): boolean {
    if (route.mirror && matchPath(route.mirror, path)) {
      return true;
    }
    return matchPath(route.path, path) !== null;
  }

  static isActive(route: AppRoute, location: string): boolean {
    return RouteUtil.match(route, location);
  }
}

export default RouteUtil;
