import { AuthRaw } from '../api/types';
import { ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE } from './constants';
import Cookie from './util';

const saveToken = (raw: AuthRaw) => {
  Cookie.set(ACCESS_TOKEN_COOKIE, raw.access_token);
  const now = new Date();
  now.setMonth(now.getDate() + 30);
  const expires = now.toUTCString();
  Cookie.set(REFRESH_TOKEN_COOKIE, raw.refresh_token, { expires });
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
