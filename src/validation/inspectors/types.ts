interface Inspector<T> {
  check: (value: T) => string | null;
}

export { Inspector };
