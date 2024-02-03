import { CookieOptions } from './types';

class Cookie {
  public static get(name: string): string | null {
    const overlap = `; ${document.cookie}`.split(`; ${name}=`)[1];
    return overlap ? overlap.split(';')[0] : null;
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
    Cookie.set(name, '', { 'max-age': '-1' });
  }
}

export default Cookie;
