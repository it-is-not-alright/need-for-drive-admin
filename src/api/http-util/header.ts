class HeaderUtil {
  public static contentType = {
    name: 'content-type',
    vals: {
      json: 'application/json',
    },
  };

  public static auth = {
    name: 'authorization',
    vals: {
      bearer: (token: string) => `Bearer ${token}`,
    },
  };

  public static set(
    headers: HeadersInit,
    header: string,
    value: string,
  ): HeadersInit {
    return { ...headers, [header]: value };
  }
}

export default HeaderUtil;
