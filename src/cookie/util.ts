import { CookieOptions } from './types';

class CookieUtil {
  public static get(name: string): string | null {
    const entry = `; ${document.cookie}`.split(`; ${name}=`)[1];
    return entry ? entry.split(';')[0] : null;
  }

  public static set(name: string, value: string, options: CookieOptions = {}) {
    let optionString = '';
    Array.from(Object.entries<string>(options)).forEach(
      ([optionName, optionValue]) => {
        optionString += `;${optionName}=${optionValue}`;
      },
    );
    const encode = encodeURIComponent;
    const entry = `${encode(name)}=${encode(value)}${optionString}`;
    document.cookie = entry;
  }

  public static delete(name: string) {
    CookieUtil.set(name, '', { 'max-age': '-1' });
  }
}

export default CookieUtil;
