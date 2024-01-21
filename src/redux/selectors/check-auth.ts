import { RootState } from '../reducers';
import { RequestState } from '../reducers/types';

const checkAuthSelector = (state: RootState): RequestState<boolean> =>
  state.checkAuth;

export { checkAuthSelector };
