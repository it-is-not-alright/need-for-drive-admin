import { RootState } from '../reducers';
import { RequestError } from '../types';

const requestErrorSelector = (state: RootState): RequestError =>
  state.requestError;

export { requestErrorSelector };
