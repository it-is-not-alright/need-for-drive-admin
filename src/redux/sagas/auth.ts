import { call, put, takeLatest } from 'redux-saga/effects';

import { logIn } from '~/src/api/actions/auth';

import { logInFailure, logInReset, logInSuccess } from '../actions/auth';
import { LogInRequestAction } from '../actions/types';
import { LOG_IN_REQUEST, LOG_IN_RESET } from '../constants';

function* logInWorker(action: LogInRequestAction): Generator {
  try {
    yield call(logIn, action.payload);
    yield put(logInSuccess());
  } catch (error) {
    yield put(logInFailure(error.message));
  }
}

function* logInWatcher(): Generator {
  yield takeLatest(LOG_IN_REQUEST, logInWorker);
  yield takeLatest(LOG_IN_RESET, logInReset);
}

export { logInWatcher };
