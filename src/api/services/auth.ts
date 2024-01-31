import { getAccessToken, removeToken, saveToken } from '~/src/cookie/auth';

import { client } from '..';
import { HTTPStatus } from '../http-util/types';
import { APIEndpoint, AuthData, User } from '../types';

class AuthService {
  public static async logIn(user: User): Promise<boolean> {
    if (getAccessToken() !== '') {
      AuthService.logOut();
    }
    try {
      const authData = await client.post<AuthData>(
        APIEndpoint.LogIn,
        user,
        false,
      );
      saveToken(authData);
      return true;
    } catch (error) {
      if (error.message === HTTPStatus.Unauthorized) {
        return false;
      }
      throw error;
    }
  }

  public static async verifyToken(): Promise<boolean> {
    try {
      await client.refreshToken();
      return true;
    } catch (error) {
      if (error.message === HTTPStatus.InternalServerError) {
        return false;
      }
      throw error;
    }
  }

  public static async logOut() {
    await client.post<null>(APIEndpoint.LogOut, null);
    removeToken();
  }
}

export { AuthService };
