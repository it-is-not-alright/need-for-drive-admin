import { call, put, takeLatest } from 'redux-saga/effects';

import { AuthService } from '~/src/api/services/auth';

import { checkAuthSuccess } from '../actions/check-auth';
import { logInFailure, logInReset, logInSuccess } from '../actions/log-in';
import { LogInRequestAction } from '../actions/types';
import { LOG_IN_REQUEST, LOG_IN_RESET } from '../constants';

function* logInWorker(action: LogInRequestAction): Generator {
  try {
    yield call(AuthService.logIn, action.payload);
    yield put(logInSuccess());
    yield put(checkAuthSuccess(true));
  } catch (error) {
    yield put(logInFailure(error.message));
  }
}

function* logInWatcher(): Generator {
  yield takeLatest(LOG_IN_REQUEST, logInWorker);
  yield takeLatest(LOG_IN_RESET, logInReset);
}

export { logInWatcher };
