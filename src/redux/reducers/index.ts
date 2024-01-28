import { combineReducers } from 'redux';

import authReducer from './auth';
import requestErrorReducer from './request-error';

const rootReducer = combineReducers({
  authState: authReducer,
  requestError: requestErrorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
