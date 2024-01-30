import { getAccessToken, removeToken, saveToken } from '~/src/api/storage-util';

import { client } from '..';
import { HTTPStatus } from '../http-util/types';
import { APIEndpoint, AuthRaw, User } from '../types';

class AuthService {
  public static async logIn(user: User): Promise<boolean> {
    if (getAccessToken() !== '') {
      AuthService.logOut();
    }
    try {
      const authRaw = await client.post<AuthRaw>(
        APIEndpoint.LogIn,
        user,
        false,
      );
      saveToken(authRaw);
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
