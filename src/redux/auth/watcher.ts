import { call, put, takeLatest } from 'redux-saga/effects';

import { logIn, logOut, verifyToken } from '~/src/api/services/auth';
import { RequestResult } from '~/src/api/types';

import { defaultRequestError } from '../constants';
import { setRequestError } from '../request-error/actions';
import { setAuthStatus } from './actions';
import {
  LOG_IN_REQUESTED,
  LOG_OUT_REQUESTED,
  TOKEN_VERIFICATION_REQUESTED,
} from './constants';
import { AuthStatus, LogInRequestedAction } from './types';

function* logInWorker(action: LogInRequestedAction): Generator {
  try {
    const result = (yield call(
      logIn,
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
    const result = (yield call(logOut)) as RequestResult<null>;
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
    const result = (yield call(verifyToken)) as RequestResult<AuthStatus>;
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
  yield takeLatest(TOKEN_VERIFICATION_REQUESTED, verifyTokenWorker);
  yield takeLatest(LOG_IN_REQUESTED, logInWorker);
  yield takeLatest(LOG_OUT_REQUESTED, logOutWorker);
}

export { authWatcher };
