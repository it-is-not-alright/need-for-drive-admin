interface Inspector<T> {
  isRequired: boolean;
  isNotBlank: (value: T) => boolean;
  check: (value: T) => string | null;
}

export { Inspector };
