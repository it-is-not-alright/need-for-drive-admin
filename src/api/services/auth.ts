import { clearTokenData, saveTokenData } from '~/src/api/storage-util';

import { apiRequest } from '..';
import { ApiUrl, AuthData, User } from '../types';

class AuthService {
  static async logIn(user: User) {
    const authData = await apiRequest.post<User, AuthData>(
      ApiUrl.LogIn,
      user,
      false,
    );
    saveTokenData(authData);
  }

  static async checkAuth(): Promise<boolean> {
    try {
      await apiRequest.refreshToken();
      return true;
    } catch (error) {
      if (error.message === '500') {
        return false;
      }
      throw error;
    }
  }

  static async logOut() {
    const data = await apiRequest.post<null, unknown>(ApiUrl.LogOut, null);
    console.log(data);
    clearTokenData();
  }
}

export { AuthService };
