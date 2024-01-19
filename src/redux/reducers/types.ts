type RequestState<T> = {
  data: T | null;
  pending: boolean;
  error: string | null;
};

export { RequestState };
