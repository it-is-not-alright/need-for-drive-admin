import { Inspector } from './types';

class StringInspector implements Inspector<string> {
  private checkerMap: Map<number, typeof this.check>;

  public constructor() {
    this.checkerMap = new Map();
  }

  public check(value: string): string | null {
    let message: string | null = null;
    this.checkerMap.forEach((checker) => {
      message ??= checker(value);
    });
    return message;
  }

  private addChecker(
    checkerId: number,
    callback: (value: string) => boolean,
    message: string,
  ): StringInspector {
    const checker = (value: string) => (callback(value) ? null : message);
    this.checkerMap.set(checkerId, checker);
    return this;
  }

  public min(limit: number, message: string) {
    const callback = (value: string) => value.length >= limit;
    return this.addChecker(1, callback, message);
  }

  public matches(pattern: RegExp, message: string) {
    const callback = (value: string) => pattern.test(value);
    return this.addChecker(2, callback, message);
  }

  public equals(target: string, message: string) {
    const callback = (value: string) => value === target;
    return this.addChecker(3, callback, message);
  }
}

export default StringInspector;
