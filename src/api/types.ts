enum ApiUrl {
  Base = 'https://frontend-study.simbirsoft.dev/api',
  LogIn = 'auth/login',
  Refresh = 'auth/refresh',
  LogOut = 'auth/logout',
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

type RefreshBody = {
  refresh_token: string;
};

export { ApiUrl, AuthData, RefreshBody, User };
