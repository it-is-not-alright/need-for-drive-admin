import { combineReducers } from 'redux';

import authReducer from './auth/reducer';
import requestErrorReducer from './request-error/reducer';

const rootReducer = combineReducers({
  authState: authReducer,
  requestError: requestErrorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
