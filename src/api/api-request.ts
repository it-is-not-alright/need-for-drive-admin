import { getTokenData, setTokenData } from '../local-storage/accessors';
import { AUTH_PREFIX } from './constants';
import { ApiUrl, AuthData, Refresh } from './types';

class ApiRequest {
  public baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(url: string, init: RequestInit): Promise<T> {
    const fullUrl = this.baseUrl + url;
    const response = await fetch(fullUrl, init);
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message);
    }
    return result;
  }

  private async authRequest<T>(url: string, init: RequestInit): Promise<T> {
    if (url.startsWith(AUTH_PREFIX)) {
      return this.request<T>(url, init);
    }
    let tokenData = getTokenData();
    if (tokenData === null) {
      throw new Error('Incorrect token data');
    }
    if (new Date().getTime() >= tokenData.expiresTime) {
      const refresh: Refresh = { refresh_token: tokenData.refresh };
      const newTokenData = await this.post<Refresh, AuthData>(
        ApiUrl.Refresh,
        refresh,
      );
      tokenData = setTokenData(newTokenData);
    }
    const authInit: RequestInit = {
      ...init,
      headers: {
        ...init.headers,
        Authorization: `${tokenData.type} ${tokenData.access}`,
      },
    };
    return this.request<T>(url, authInit);
  }

  public async get<T>(url: string): Promise<T> {
    return this.authRequest<T>(url, { method: 'GET' });
  }

  public async post<T, U>(url: string, body: T): Promise<U> {
    const init: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    return this.authRequest<U>(url, init);
  }

  public async put(url: string) {
    this.authRequest(url, { method: 'PUT' });
  }

  public async remove(url: string) {
    this.authRequest(url, { method: 'REMOVE' });
  }
}

export default ApiRequest;
