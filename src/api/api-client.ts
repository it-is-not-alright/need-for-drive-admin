import { getRefreshToken, removeToken, saveToken } from '../cookie/auth';
import { AuthRaw, Endpoint, RequestOptions, RequestResult } from './types';
import { setHeaders, unpack } from './utils';

class APIClient {
  private baseURL: string;

  public constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  public async get<T>(url: string, options: RequestOptions = {}) {
    return this.request<T>(url, { method: 'GET' }, options);
  }

  public async post<T>(url: string, options: RequestOptions = {}) {
    return this.request<T>(url, { method: 'POST' }, options);
  }

  public async put<T>(url: string, options: RequestOptions = {}) {
    return this.request<T>(url, { method: 'PUT' }, options);
  }

  public async delete(url: string, options: RequestOptions = {}) {
    this.request(url, { method: 'DELETE' }, options);
  }

  public async refreshToken(): Promise<RequestResult<boolean>> {
    const raw = await this.post<AuthRaw>(Endpoint.Refresh, {
      body: { refresh_token: getRefreshToken() },
    });
    if (raw.content) {
      saveToken(raw.content);
      return { content: true };
    }
    removeToken();
    if (raw.error.status === 500) {
      return { content: false };
    }
    return { error: raw.error };
  }

  private async request<T>(
    url: string,
    init: RequestInit,
    options: RequestOptions,
  ): Promise<RequestResult<T>> {
    const fullURL = `${this.baseURL}/${url}${options.params ?? ''}`;
    let fullInit = setHeaders(init, options);
    if (options.body) {
      fullInit.body = JSON.stringify(options.body);
    }
    let response = await fetch(fullURL, fullInit);
    if (response.status === 401 && getRefreshToken() !== null) {
      const { content } = await this.refreshToken();
      if (content === true) {
        fullInit = setHeaders(init, options);
        response = await fetch(fullURL, fullInit);
      }
    }
    return unpack<T>(response);
  }
}

export default APIClient;
