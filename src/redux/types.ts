type PayloadAction<T, P> = {
  type: T;
  payload: P;
};

export { PayloadAction };
