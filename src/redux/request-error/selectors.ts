import { RootState } from '../reducer';
import { RequestError } from './types';

const requestErrorSelector = (state: RootState): RequestError =>
  state.requestError;

export { requestErrorSelector };
