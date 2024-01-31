import { getAccessToken } from '~/src/cookie/auth';

import HeaderUtil from './header';

class RequestUtil {
  public static get get(): RequestInit {
    return { method: 'GET' };
  }

  public static get post(): RequestInit {
    return { method: 'POST' };
  }

  public static get put(): RequestInit {
    return { method: 'PUT' };
  }

  public static get delete(): RequestInit {
    return { method: 'DELETE' };
  }

  public static authorize(init: RequestInit): RequestInit {
    const headers = HeaderUtil.set(
      init.headers,
      HeaderUtil.auth.name,
      HeaderUtil.auth.vals.bearer(getAccessToken()),
    );
    return { ...init, headers };
  }

  public static setJSONBody(init: RequestInit, body: unknown): RequestInit {
    if (body === null) {
      return init;
    }
    const headers = HeaderUtil.set(
      init.headers,
      HeaderUtil.contentType.name,
      HeaderUtil.contentType.vals.json,
    );
    return { ...init, headers, body: JSON.stringify(body) };
  }
}

export default RequestUtil;
