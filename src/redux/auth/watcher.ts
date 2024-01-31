import { call, put, takeLatest } from 'redux-saga/effects';

import { AuthService } from '~/src/api/services/auth';

import { setRequestError } from '../request-error/actions';
import { setAuthStatus } from './actions';
import { LOG_IN, LOG_OUT, VERIFY_TOKEN } from './constants';
import { AuthStatus, LogInAction } from './types';

function* logInWorker(action: LogInAction): Generator {
  try {
    const success = yield call(AuthService.logIn, action.payload);
    const status = (success as boolean)
      ? AuthStatus.LogInSuccess
      : AuthStatus.LogInFailure;
    yield put(setAuthStatus(status));
  } catch (error) {
    yield put(setRequestError(error.message));
    yield put(setAuthStatus(AuthStatus.Unknown));
  }
}

function* logOutWorker(): Generator {
  try {
    yield call(AuthService.logOut);
    yield put(setAuthStatus(AuthStatus.Unauthorized));
  } catch (error) {
    yield put(setRequestError(error.message));
    yield put(setAuthStatus(AuthStatus.Unknown));
  }
}

function* verifyTokenWorker(): Generator {
  try {
    const success = yield call(AuthService.verifyToken);
    const status = (success as boolean)
      ? AuthStatus.Authorized
      : AuthStatus.Unauthorized;
    yield put(setAuthStatus(status));
  } catch (error) {
    yield put(setRequestError(error.message));
    yield put(setAuthStatus(AuthStatus.Unknown));
  }
}

function* authWatcher(): Generator {
  yield takeLatest(VERIFY_TOKEN, verifyTokenWorker);
  yield takeLatest(LOG_IN, logInWorker);
  yield takeLatest(LOG_OUT, logOutWorker);
}

export { authWatcher };
