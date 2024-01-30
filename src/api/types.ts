enum APIEndpoint {
  LogIn = 'auth/login',
  Refresh = 'auth/refresh',
  LogOut = 'auth/logout',
}

type AuthRaw = {
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

interface Entity {
  id: number;
  label: string;
}

export { APIEndpoint, AuthRaw, Entity, RefreshBody, User };
