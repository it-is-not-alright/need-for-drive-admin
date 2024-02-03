type PayloadAction<T, P> = {
  type: T;
  payload: P;
};

type RequestState<T> = {
  data: T;
  pending: boolean;
};

export { PayloadAction, RequestState };
