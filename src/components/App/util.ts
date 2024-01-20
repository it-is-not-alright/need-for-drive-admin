import { AppRoute } from './types';

function isPublicRoute(route: string): boolean {
  return (
    route === AppRoute.LogIn ||
    route === AppRoute.SignIn ||
    route === AppRoute.Any
  );
}

export { isPublicRoute };
