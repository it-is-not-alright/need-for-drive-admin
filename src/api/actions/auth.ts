import { setTokenData } from '~/src/local-storage/accessors';

import { apiRequest } from '..';
import { ApiUrl, AuthData, User } from '../types';

const logIn = async (user: User) => {
  const authData = await apiRequest.post<User, AuthData>(ApiUrl.LogIn, user);
  setTokenData(authData);
};

export { logIn };
