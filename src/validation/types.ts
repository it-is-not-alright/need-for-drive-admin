import { Inspector } from './inspectors/types';

type Scheme<T extends object> = {
  [K in keyof T]?: Inspector<T[K]>;
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

export { Scheme, Validatable, ValidationResult };
