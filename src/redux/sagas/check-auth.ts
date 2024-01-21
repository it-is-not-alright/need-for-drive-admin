import { call, put, takeLatest } from 'redux-saga/effects';

import { AuthService } from '~/src/api/services/auth';

import {
  checkAuthFailure,
  checkAuthReset,
  checkAuthSuccess,
} from '../actions/check-auth';
import { CHECK_AUTH_REQUEST, CHECK_AUTH_RESET } from '../constants';

function* checkAuthWorker(): Generator {
  try {
    const result = (yield call(AuthService.checkAuth)) as boolean;
    yield put(checkAuthSuccess(result));
  } catch (error) {
    yield put(checkAuthFailure(error.message));
  }
}

function* checkAuthWatcher(): Generator {
  yield takeLatest(CHECK_AUTH_REQUEST, checkAuthWorker);
  yield takeLatest(CHECK_AUTH_RESET, checkAuthReset);
}

export { checkAuthWatcher };
