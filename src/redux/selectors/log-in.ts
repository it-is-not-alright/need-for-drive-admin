import { RootState } from '../reducers';
import { RequestState } from '../reducers/types';

const logInSelector = (state: RootState): RequestState<boolean> => state.logIn;

export { logInSelector };
