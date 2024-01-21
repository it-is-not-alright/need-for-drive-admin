import { InitUtil } from './init-util';
import { getRefreshToken, saveTokenData } from './storage-util';
import { ApiUrl, AuthData, RefreshBody } from './types';

class ApiRequest {
  public baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(url: string, init: RequestInit): Promise<T> {
    const fullUrl = `${this.baseUrl}/${url}`;
    const response = await fetch(fullUrl, init);
    const result = await response.json();
    if (!response.ok) {
      throw new Error(String(response.status));
    }
    return result;
  }

  private async authRequest<T>(url: string, init: RequestInit): Promise<T> {
    try {
      return this.request<T>(url, InitUtil.authorize(init));
    } catch (error) {
      if (error.message === '401') {
        await this.refreshToken();
        return this.request<T>(url, InitUtil.authorize(init));
      }
      throw error;
    }
  }

  public async refreshToken() {
    const authData = await this.post<RefreshBody, AuthData>(
      ApiUrl.Refresh,
      { refresh_token: getRefreshToken() },
      false,
    );
    saveTokenData(authData);
  }

  public async get<T>(url: string): Promise<T> {
    return this.authRequest<T>(url, InitUtil.get);
  }

  public async post<T, U>(
    url: string,
    body: T,
    isAuthorized: boolean = true,
  ): Promise<U> {
    const init = InitUtil.setBody(InitUtil.post, body);
    return isAuthorized
      ? this.authRequest<U>(url, init)
      : this.request<U>(url, init);
  }

  public async put<T, U>(url: string, body: T): Promise<U> {
    const init = InitUtil.setBody(InitUtil.put, body);
    return this.authRequest<U>(url, init);
  }

  public async delete(url: string) {
    this.authRequest(url, InitUtil.delete);
  }
}

export default ApiRequest;
