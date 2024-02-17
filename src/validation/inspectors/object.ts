import { Inspector } from './types';

class ObjectInspector implements Inspector<object> {
  private checkerMap: Map<number, typeof this.check>;

  public isRequired: boolean;

  public isNotBlank: (value: object) => boolean;

  public constructor() {
    this.checkerMap = new Map();
    this.isRequired = false;
    this.isNotBlank = (value: object) => value !== null;
  }

  public check(value: object): string | null {
    let message: string | null = null;
    this.checkerMap.forEach((checker) => {
      message ??= checker(value);
    });
    return message;
  }

  private addChecker(
    checkerId: number,
    callback: (value: object) => boolean,
    message: string,
  ): ObjectInspector {
    const checker = (value: object) => (callback(value) ? null : message);
    this.checkerMap.set(checkerId, checker);
    return this;
  }

  public required(message: string) {
    this.isRequired = true;
    const callback = (value: object) => this.isNotBlank(value);
    return this.addChecker(1, callback, message);
  }
}

export default ObjectInspector;
