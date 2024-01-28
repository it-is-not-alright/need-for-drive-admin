import HeaderUtil from './header';

class ResponseUtil {
  public static hasJSON(response: Response): boolean {
    const cType = response.headers.get(HeaderUtil.contentType.name);
    return cType?.includes(HeaderUtil.contentType.vals.json) ?? false;
  }

  public static async getContent<T>(response: Response): Promise<T> {
    if (ResponseUtil.hasJSON(response)) {
      return response.json();
    }
    return null;
  }
}

export default ResponseUtil;
