import { getAccessToken, removeToken, saveToken } from '~/src/cookie/auth';
import { AuthStatus } from '~/src/redux/auth/types';

import { client } from '..';
import { AuthData, Endpoint, RequestResult, User } from '../types';

class AuthService {
  public static async logIn(user: User): Promise<RequestResult<AuthStatus>> {
    if (getAccessToken() !== null) {
      AuthService.logOut();
    }
    const raw = await client.post<AuthData>(Endpoint.LogIn, {
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

  public static async verifyToken(): Promise<RequestResult<AuthStatus>> {
    const result = await client.refreshToken();
    if (result.content === true) {
      return { content: AuthStatus.Authorized };
    }
    if (result.content === false) {
      return { content: AuthStatus.Unauthorized };
    }
    return { error: result.error };
  }

  public static async logOut(): Promise<RequestResult<null>> {
    const raw = await client.post<null>(Endpoint.LogOut);
    removeToken();
    return raw;
  }
}

export { AuthService };
