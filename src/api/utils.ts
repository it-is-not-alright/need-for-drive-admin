import { getAccessToken } from '../cookie/auth';
import { defaultApiErrorMessage } from './constants';
import { RequestOptions, RequestResult } from './types';

function containsJSON(response: Response): boolean {
  const contentType = response.headers.get('content-type');
  return contentType?.includes('application/json');
}

async function unpack<T>(response: Response): Promise<RequestResult<T>> {
  if (!response.ok) {
    return {
      error: {
        status: response.status,
        message: response.statusText || defaultApiErrorMessage,
      },
    };
  }
  if (containsJSON(response)) {
    const content = await response.json();
    return { content };
  }
  return {};
}

function setHeaders(init: RequestInit, options: RequestOptions): RequestInit {
  const headers = new Headers({ ...init.headers, ...options?.headers });
  const accessToken = getAccessToken();
  if (accessToken !== null) {
    headers.set('authorization', `Bearer ${accessToken}`);
  }
  if (options.body) {
    headers.set('content-type', 'application/json');
  }
  return { ...init, headers };
}

export { setHeaders, unpack };
