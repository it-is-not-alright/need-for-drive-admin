import ArrayInspector from './inspectors/array';
import NumberInspector from './inspectors/number';
import ObjectInspector from './inspectors/object';
import StringInspector from './inspectors/string';
import { Inspector } from './inspectors/types';
import { AbstractScheme, Validatable, ValidationResult } from './types';

class Validator {
  public static string(): StringInspector {
    return new StringInspector();
  }

  public static number(): NumberInspector {
    return new NumberInspector();
  }

  public static object(): ObjectInspector {
    return new ObjectInspector();
  }

  public static array(): ArrayInspector {
    return new ArrayInspector();
  }

  public static toValidatable<T extends object>(object: T): Validatable<T> {
    const validatable: { [key: string]: unknown } = {};
    Object.entries(object).forEach(([key, value]) => {
      validatable[key] = { value, error: null };
    });
    return validatable as Validatable<T>;
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

  public static getCompletionPercentage<T extends object>(
    object: Validatable<T>,
    scheme: AbstractScheme<T>,
  ) {
    let count = 0;
    const schemeKeys = Object.keys(scheme);
    for (let i = 0; i < schemeKeys.length; i += 1) {
      const prop = schemeKeys[i] as keyof T;
      const { value } = object[prop];
      const inspector: Inspector<typeof value> = scheme[prop];
      if (!inspector.isRequired || inspector.isNotBlank(value)) {
        count += 1;
      }
    }
    return Math.round((count / schemeKeys.length) * 100);
  }
}

export default Validator;
