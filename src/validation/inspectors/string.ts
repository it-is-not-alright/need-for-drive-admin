import { Inspector } from './types';

class StringInspector implements Inspector<string> {
  private checkerMap: Map<number, typeof this.check>;

  public isRequired: boolean;

  public isNotBlank: (value: string) => boolean;

  public constructor() {
    this.checkerMap = new Map();
    this.isRequired = false;
    this.isNotBlank = (value: string) => Boolean(value?.length);
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

  public required(message: string) {
    this.isRequired = true;
    const callback = (value: string) => this.isNotBlank(value);
    return this.addChecker(1, callback, message);
  }

  public min(limit: number, message: string) {
    const callback = (value: string) => value.length >= limit;
    return this.addChecker(2, callback, message);
  }

  public matches(pattern: RegExp, message: string) {
    const callback = (value: string) => pattern.test(value);
    return this.addChecker(3, callback, message);
  }

  public equals(target: string, message: string) {
    const callback = (value: string) => value === target;
    return this.addChecker(4, callback, message);
  }
}

export default StringInspector;
