import { RootState } from '../reducers';
import { AuthState } from '../types';

const authSelector = (state: RootState): AuthState => state.authState;

export { authSelector };
