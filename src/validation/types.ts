import NumberInspector from './inspectors/number';
import StringInspector from './inspectors/string';
import { Inspector } from './inspectors/types';

type AbstractScheme<T extends object> = {
  [K in keyof T]?: Inspector<T[K]>;
};

type Scheme<T extends object> = {
  [K in keyof T]?: T[K] extends string
    ? StringInspector
    : T[K] extends number
      ? NumberInspector
      : Inspector<T[K]>;
};

type ValidatablePropetry<T> = {
  value: T;
  error: string;
};

type Validatable<T extends object> = {
  [K in keyof T]: ValidatablePropetry<T[K]>;
};

type ValidationResult<T extends object> = {
  data: Validatable<T>;
  failure: boolean;
};

export {
  AbstractScheme,
  Scheme,
  Validatable,
  ValidatablePropetry,
  ValidationResult,
};
