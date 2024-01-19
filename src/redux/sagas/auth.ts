import { call, put, takeLatest } from 'redux-saga/effects';

import { logIn } from '~/src/api/actions/auth';

import { logInFailure, logInSuccess, resetAuthState } from '../actions/auth';
import { LogInRequestAction } from '../actions/types';
import { LOG_IN_REQUEST, RESET_AUTH_STATE } from '../constants';

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
  yield takeLatest(RESET_AUTH_STATE, resetAuthState);
}

export { logInWatcher };
