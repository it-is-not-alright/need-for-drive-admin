import { getAccessToken, removeToken, saveToken } from '~/src/cookie/auth';
import { AuthStatus } from '~/src/redux/auth/types';

import { client } from '..';
import { Endpoint, RequestResult } from '../types';
import { AuthRaw, User } from './types';

async function logOut(): Promise<RequestResult<null>> {
  const raw = await client.post<null>(Endpoint.LogOut);
  removeToken();
  return raw;
}

async function logIn(user: User): Promise<RequestResult<AuthStatus>> {
  if (getAccessToken() !== null) {
    logOut();
  }
  const raw = await client.post<AuthRaw>(Endpoint.LogIn, {
    body: user,
  });
  if (raw.content) {
    saveToken(raw.content);
    return { content: AuthStatus.LogInSuccess };
  }
  if (raw.error.status === 401) {
    return { content: AuthStatus.LogInFailure };
  }
  return { error: raw.error };
}

async function verifyToken(): Promise<RequestResult<AuthStatus>> {
  const result = await client.refreshToken();
  if (result.content === true) {
    return { content: AuthStatus.Authorized };
  }
  if (result.content === false) {
    return { content: AuthStatus.Unauthorized };
  }
  return { error: result.error };
}

export { logIn, logOut, verifyToken };
