import { all, fork } from 'redux-saga/effects';

import { authWatcher } from './auth';

function* rootSaga(): Generator {
  yield all([fork(authWatcher)]);
}

export default rootSaga;
