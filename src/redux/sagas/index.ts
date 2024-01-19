import { all, fork } from 'redux-saga/effects';

import { logInWatcher } from './auth';

function* rootSaga(): Generator {
  yield all([fork(logInWatcher)]);
}

export default rootSaga;
