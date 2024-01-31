import { getRefreshToken, saveToken } from '../cookie/auth';
import RequestUtil from './http-util/request';
import ResponseUtil from './http-util/response';
import { HTTPStatus } from './http-util/types';
import { APIEndpoint, AuthRaw } from './types';

class APIClient {
  private baseURL: string;

  public constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(url: string, init: RequestInit): Promise<T> {
    const fullURL = `${this.baseURL}/${url}`;
    const response = await fetch(fullURL, init);
    if (!response.ok) {
      throw new Error(String(response.status));
    }
    return ResponseUtil.getContent<T>(response);
  }

  public async refreshToken() {
    const authRaw = await this.post<AuthRaw>(
      APIEndpoint.Refresh,
      { refresh_token: getRefreshToken() },
      false,
    );
    saveToken(authRaw);
  }

  private async interceptor<T>(
    url: string,
    init: RequestInit,
    isAuthorized: boolean,
  ): Promise<T> {
    if (!isAuthorized) {
      return this.request<T>(url, init);
    }
    try {
      return this.request<T>(url, RequestUtil.authorize(init));
    } catch (error) {
      if (error.message === HTTPStatus.Unauthorized) {
        await this.refreshToken();
        return this.request<T>(url, RequestUtil.authorize(init));
      }
      throw error;
    }
  }

  public async get<T>(url: string, isAuthorized: boolean = true): Promise<T> {
    return this.interceptor<T>(url, RequestUtil.get, isAuthorized);
  }

  public async post<T>(
    url: string,
    body: unknown,
    isAuthorized: boolean = true,
  ): Promise<T> {
    const init = RequestUtil.setJSONBody(RequestUtil.post, body);
    return this.interceptor<T>(url, init, isAuthorized);
  }

  public async put<T>(
    url: string,
    body: unknown,
    isAuthorized: boolean = true,
  ): Promise<T> {
    const init = RequestUtil.setJSONBody(RequestUtil.put, body);
    return this.interceptor<T>(url, init, isAuthorized);
  }

  public async delete(url: string, isAuthorized: boolean = true) {
    this.interceptor(url, RequestUtil.delete, isAuthorized);
  }
}

export default APIClient;
