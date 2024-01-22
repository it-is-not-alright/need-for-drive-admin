import { RootState } from '../reducers';
import { AuthState } from '../reducers/types';

const authSelector = (state: RootState): AuthState => state.auth;

export { authSelector };
