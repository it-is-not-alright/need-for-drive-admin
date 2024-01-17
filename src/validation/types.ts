type ValueWrapper = {
  value: string;
  error: string;
};

type Restriction<T> = {
  target: T;
  message: string;
};

type Scheme = {
  minLen?: Restriction<number>;
  maxLen?: Restriction<number>;
  pattern?: Restriction<RegExp>;
};

type Inspector<T> = (value: string, target: T) => boolean;

type InspectorMap = {
  minLen: Inspector<number>;
  maxLen: Inspector<number>;
  pattern: Inspector<RegExp>;
};

export { Inspector, InspectorMap, Restriction, Scheme, ValueWrapper };
