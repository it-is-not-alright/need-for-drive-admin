import { ACCESS_TOKEN_ITEM, REFRESH_TOKEN_ITEM } from './constants';
import { AuthRaw } from './types';

const saveToken = (authRaw: AuthRaw) => {
  localStorage.setItem(ACCESS_TOKEN_ITEM, authRaw.access_token);
  localStorage.setItem(REFRESH_TOKEN_ITEM, authRaw.refresh_token);
};

const getAccessToken = (): string => {
  return localStorage.getItem(ACCESS_TOKEN_ITEM) || '';
};

const getRefreshToken = (): string => {
  return localStorage.getItem(REFRESH_TOKEN_ITEM) || '';
};

const removeToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_ITEM);
  localStorage.removeItem(REFRESH_TOKEN_ITEM);
};

export { getAccessToken, getRefreshToken, removeToken, saveToken };
