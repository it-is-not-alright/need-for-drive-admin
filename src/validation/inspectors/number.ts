import { Inspector } from './types';

class NumberInspector implements Inspector<number> {
  private checkerMap: Map<number, typeof this.check>;

  public isRequired: boolean;

  public isNotBlank: (value: number) => boolean;

  public constructor() {
    this.checkerMap = new Map();
    this.isRequired = false;
    this.isNotBlank = (value: number) => value !== null;
  }

  public check(value: number): string | null {
    let message: string | null = null;
    this.checkerMap.forEach((checker) => {
      message ??= checker(value);
    });
    return message;
  }

  private addChecker(
    checkerId: number,
    callback: (value: number) => boolean,
    message: string,
  ): NumberInspector {
    const checker = (value: number) => (callback(value) ? null : message);
    this.checkerMap.set(checkerId, checker);
    return this;
  }

  public required(message: string) {
    this.isRequired = true;
    const callback = (value: number) => this.isNotBlank(value);
    return this.addChecker(1, callback, message);
  }

  public min(limit: number, message: string) {
    const callback = (value: number) => value >= limit;
    return this.addChecker(2, callback, message);
  }
}

export default NumberInspector;
