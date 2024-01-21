import { all, fork } from 'redux-saga/effects';

import { checkAuthWatcher } from './check-auth';
import { logInWatcher } from './log-in';

function* rootSaga(): Generator {
  yield all([fork(logInWatcher), fork(checkAuthWatcher)]);
}

export default rootSaga;
