import { ACCESS_TOKEN_ITEM, REFRESH_TOKEN_ITEM } from './constants';
import { AuthData } from './types';

const saveTokenData = (authData: AuthData) => {
  localStorage.setItem(ACCESS_TOKEN_ITEM, authData.access_token);
  localStorage.setItem(REFRESH_TOKEN_ITEM, authData.refresh_token);
};

const getAccessToken = (): string => {
  return localStorage.getItem(ACCESS_TOKEN_ITEM) || '';
};

const getRefreshToken = (): string => {
  return localStorage.getItem(REFRESH_TOKEN_ITEM) || '';
};

const clearTokenData = () => {
  localStorage.removeItem(ACCESS_TOKEN_ITEM);
  localStorage.removeItem(REFRESH_TOKEN_ITEM);
};

export { clearTokenData, getAccessToken, getRefreshToken, saveTokenData };
