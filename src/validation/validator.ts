import StringInspector from './inspectors/string';
import { Inspector } from './inspectors/types';
import { AbstractScheme, Validatable, ValidationResult } from './types';

class Validator {
  public static string(): StringInspector {
    return new StringInspector();
  }

  public static check<T extends object>(
    object: Validatable<T>,
    scheme: AbstractScheme<T>,
  ): ValidationResult<T> {
    const result: ValidationResult<T> = {
      data: { ...object },
      failure: false,
    };
    const schemeKeys = Object.keys(scheme);
    for (let i = 0; i < schemeKeys.length; i += 1) {
      const prop = schemeKeys[i] as keyof T;
      const { value } = object[prop];
      const inspector: Inspector<typeof value> = scheme[prop];
      const message: string | null = inspector.check(value);
      if (message !== null) {
        result.data[prop].error = message;
        result.failure = true;
      }
    }
    return result;
  }
}

export default Validator;
