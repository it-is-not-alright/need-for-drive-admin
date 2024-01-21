import { combineReducers } from 'redux';

import checkAuthReducer from './check-auth';
import logInReducer from './log-in';

const rootReducer = combineReducers({
  logIn: logInReducer,
  checkAuth: checkAuthReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
