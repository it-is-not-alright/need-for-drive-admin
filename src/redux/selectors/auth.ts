import { RootState } from '../reducers';
import { RequestState } from '../reducers/types';

const authSelector = (state: RootState): RequestState<boolean> => state.auth;

export { authSelector };
