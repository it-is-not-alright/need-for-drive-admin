import { AuthData } from '../api/types';
import { TOKEN_DATA_ITEM } from './constants';
import { TokenData } from './types';

const getTokenData = (): TokenData | null => {
  const tokenData = localStorage.getItem(TOKEN_DATA_ITEM);
  return tokenData ? (JSON.parse(tokenData) as TokenData) : null;
};

const setTokenData = (authData: AuthData): TokenData => {
  const tokenData: TokenData = {
    access: authData.access_token,
    refresh: authData.refresh_token,
    type: authData.token_type,
    expiresTime: new Date().getTime() + authData.expires_in,
  };
  localStorage.setItem(TOKEN_DATA_ITEM, JSON.stringify(tokenData));
  return tokenData;
};

export { getTokenData, setTokenData };
