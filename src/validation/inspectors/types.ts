interface Inspector<T> {
  check: (value: T) => string | null;
  min?: (limit: number, message: string) => Inspector<T>;
  matches?: (pattern: RegExp, message: string) => Inspector<T>;
  equals?: (target: T, message: string) => Inspector<T>;
}

export { Inspector };
