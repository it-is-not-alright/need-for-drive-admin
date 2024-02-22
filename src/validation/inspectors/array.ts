import { Inspector } from './types';

class ArrayInspector implements Inspector<[]> {
  private checkerMap: Map<number, typeof this.check>;

  public isRequired: boolean;

  public isNotBlank: (value: []) => boolean;

  public constructor() {
    this.checkerMap = new Map();
    this.isRequired = false;
    this.isNotBlank = (value: []) => value.length > 0;
  }

  public check(value: []): string | null {
    let message: string | null = null;
    this.checkerMap.forEach((checker) => {
      message ??= checker(value);
    });
    return message;
  }

  private addChecker(
    checkerId: number,
    callback: (value: []) => boolean,
    message: string,
  ): ArrayInspector {
    const checker = (value: []) => (callback(value) ? null : message);
    this.checkerMap.set(checkerId, checker);
    return this;
  }

  public required(message: string) {
    this.isRequired = true;
    const callback = (value: []) => this.isNotBlank(value);
    return this.addChecker(1, callback, message);
  }
}

export default ArrayInspector;
