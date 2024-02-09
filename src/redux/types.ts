type PayloadAction<T, P> = {
  type: T;
  payload: P;
};

type RequestState<T> = {
  content: T;
  pending: boolean;
};

export { PayloadAction, RequestState };
