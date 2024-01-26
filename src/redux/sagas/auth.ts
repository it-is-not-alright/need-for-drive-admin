import { call, put, takeLatest } from 'redux-saga/effects';

import { AuthService } from '~/src/api/services/auth';

import {
  authClear,
  authFailure,
  checkAuthSuccess,
  logInSuccess,
  logOutSuccess,
  signUpSuccess,
} from '../actions/auth';
import { LogInRequestAction } from '../actions/types';
import {
  AUTH_CLEAR,
  CHECK_AUTH_REQUEST,
  LOG_IN_REQUEST,
  LOG_OUT_REQUEST,
  SIGN_UP_SUCCESS,
} from '../constants';

function* logInWorker(action: LogInRequestAction): Generator {
  try {
    yield call(AuthService.logIn, action.payload);
    yield put(logInSuccess());
  } catch (error) {
    yield put(authFailure(error.message));
  }
}

function* logOutWorker(): Generator {
  try {
    yield call(AuthService.logOut);
    yield put(logOutSuccess());
  } catch (error) {
    yield put(authFailure(error.message));
  }
}

function* checkAuthWorker(): Generator {
  try {
    const result = (yield call(AuthService.checkAuth)) as boolean;
    yield put(checkAuthSuccess(result));
  } catch (error) {
    yield put(authFailure(error.message));
  }
}

function* authWatcher(): Generator {
  yield takeLatest(SIGN_UP_SUCCESS, signUpSuccess);
  yield takeLatest(LOG_IN_REQUEST, logInWorker);
  yield takeLatest(LOG_OUT_REQUEST, logOutWorker);
  yield takeLatest(CHECK_AUTH_REQUEST, checkAuthWorker);
  yield takeLatest(AUTH_CLEAR, authClear);
}

export { authWatcher };
