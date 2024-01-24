type Rule<T> = {
  target: T;
  message: string;
};

type RuleSet = {
  minLen?: Rule<number>;
  pattern?: Rule<RegExp>;
};

type RuleTarget = RuleSet[keyof RuleSet]['target'];

type Checker<T extends RuleTarget> = (value: unknown, target: T) => boolean;

type CheckerSet = {
  [K in keyof RuleSet]-?: Checker<RuleSet[K]['target']>;
};

type Scheme<T extends object> = {
  [K in keyof T]?: RuleSet;
};

type ValidatableProp<T> = {
  value: T;
  error: string;
};

type Validatable<T extends object> = {
  [K in keyof T]: ValidatableProp<T[K]>;
};

type ValidationResult<T extends object> = {
  data: Validatable<T>;
  failure: boolean;
};

export {
  Checker,
  CheckerSet,
  Rule,
  RuleSet,
  RuleTarget,
  Scheme,
  Validatable,
  ValidatableProp,
  ValidationResult,
};
