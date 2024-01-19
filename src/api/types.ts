import { AUTH_PREFIX } from './constants';

enum ApiUrl {
  Base = 'https://frontend-study.simbirsoft.dev/api/',
  LogIn = `${AUTH_PREFIX}/login`,
  Refresh = `${AUTH_PREFIX}/refresh`,
}

type AuthData = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
  user_id: number;
};

type User = {
  username: string;
  password: string;
};

type Refresh = {
  refresh_token: string;
};

export { ApiUrl, AuthData, Refresh, User };
