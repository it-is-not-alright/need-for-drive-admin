import { call, put, takeLatest } from 'redux-saga/effects';

import { AuthService } from '~/src/api/services/auth';
import { RequestResult } from '~/src/api/types';

import { defaultRequestError } from '../constants';
import { setRequestError } from '../request-error/actions';
import { setAuthStatus } from './actions';
import { LOG_IN, LOG_OUT, VERIFY_TOKEN } from './constants';
import { AuthStatus, LogInAction } from './types';

function* logInWorker(action: LogInAction): Generator {
  try {
    const result = (yield call(
      AuthService.logIn,
      action.payload,
    )) as RequestResult<AuthStatus>;
    if (result.error) {
      yield put(setRequestError(result.error));
      yield put(setAuthStatus(AuthStatus.Unknown));
    } else {
      yield put(setAuthStatus(result.content));
    }
  } catch (error) {
    yield put(setRequestError(defaultRequestError));
    yield put(setAuthStatus(AuthStatus.Unknown));
  }
}

function* logOutWorker(): Generator {
  try {
    const result = (yield call(AuthService.logOut)) as RequestResult<null>;
    if (result.error) {
      yield put(setRequestError(result.error));
      yield put(setAuthStatus(AuthStatus.Unknown));
    } else {
      yield put(setAuthStatus(AuthStatus.Unauthorized));
    }
  } catch (error) {
    yield put(setRequestError(defaultRequestError));
    yield put(setAuthStatus(AuthStatus.Unknown));
  }
}

function* verifyTokenWorker(): Generator {
  try {
    const result = (yield call(
      AuthService.verifyToken,
    )) as RequestResult<AuthStatus>;
    if (result.error) {
      yield put(setRequestError(result.error));
      yield put(setAuthStatus(AuthStatus.Unknown));
    } else {
      yield put(setAuthStatus(result.content));
    }
  } catch (error) {
    yield put(setRequestError(defaultRequestError));
    yield put(setAuthStatus(AuthStatus.Unknown));
  }
}

function* authWatcher(): Generator {
  yield takeLatest(VERIFY_TOKEN, verifyTokenWorker);
  yield takeLatest(LOG_IN, logInWorker);
  yield takeLatest(LOG_OUT, logOutWorker);
}

export { authWatcher };
