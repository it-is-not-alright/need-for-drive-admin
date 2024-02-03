import { RootState } from '../reducer';
import { AuthState } from './types';

const authSelector = (state: RootState): AuthState => state.authState;

export { authSelector };
