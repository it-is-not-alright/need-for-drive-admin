import { getAccessToken } from './storage-util';

class InitUtil {
  static get get(): RequestInit {
    return { method: 'GET' };
  }

  static get post(): RequestInit {
    return { method: 'POST' };
  }

  static get put(): RequestInit {
    return { method: 'PUT' };
  }

  static get delete(): RequestInit {
    return { method: 'DELETE' };
  }

  static authorize(init: RequestInit): RequestInit {
    const headers = new Headers(init.headers);
    headers.set('Authorization', `Bearer ${getAccessToken()}`);
    return { ...init, headers };
  }

  static setBody(init: RequestInit, body: unknown): RequestInit {
    if (body === null) {
      return init;
    }
    const headers = new Headers(init.headers);
    headers.set('Content-Type', 'application/json');
    return { ...init, headers, body: JSON.stringify(body) };
  }
}

export { InitUtil };
