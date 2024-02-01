import { AuthData } from '../api/types';
import { ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE } from './constants';
import Cookie from './util';

const saveToken = (authData: AuthData) => {
  Cookie.set(ACCESS_TOKEN_COOKIE, authData.access_token);
  Cookie.set(REFRESH_TOKEN_COOKIE, authData.refresh_token);
};

const getAccessToken = (): string | null => {
  return Cookie.get(ACCESS_TOKEN_COOKIE);
};

const getRefreshToken = (): string | null => {
  return Cookie.get(REFRESH_TOKEN_COOKIE);
};

const removeToken = () => {
  Cookie.delete(ACCESS_TOKEN_COOKIE);
  Cookie.delete(REFRESH_TOKEN_COOKIE);
};

export { getAccessToken, getRefreshToken, removeToken, saveToken };
