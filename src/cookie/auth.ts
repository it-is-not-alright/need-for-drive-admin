import { AuthRaw } from '../api/types';
import { ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE } from './constants';
import CookieUtil from './util';

const saveToken = (authRaw: AuthRaw) => {
  CookieUtil.set(ACCESS_TOKEN_COOKIE, authRaw.access_token);
  CookieUtil.set(REFRESH_TOKEN_COOKIE, authRaw.refresh_token);
};

const getAccessToken = (): string => {
  return CookieUtil.get(ACCESS_TOKEN_COOKIE) ?? '';
};

const getRefreshToken = (): string => {
  return CookieUtil.get(REFRESH_TOKEN_COOKIE) ?? '';
};

const removeToken = () => {
  CookieUtil.delete(ACCESS_TOKEN_COOKIE);
  CookieUtil.delete(REFRESH_TOKEN_COOKIE);
};

export { getAccessToken, getRefreshToken, removeToken, saveToken };
