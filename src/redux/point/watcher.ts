import { call, put, takeLatest } from 'redux-saga/effects';

import { getPoints } from '~/src/api/services/point';
import { ArrayRequestData, PointRaw, RequestResult } from '~/src/api/types';

import { defaultRequestError } from '../constants';
import { setRequestError } from '../request-error/actions';
import { setPoints } from './actions';
import { POINTS_REQUESTED } from './constants';
import { PointsRequestedAction } from './types';

function* pointsWorker(action: PointsRequestedAction): Generator {
  try {
    const result = (yield call(getPoints, action.payload)) as RequestResult<
      ArrayRequestData<PointRaw>
    >;
    if (result.error) {
      yield put(setRequestError(result.error));
    } else {
      yield put(setPoints(result.content));
    }
  } catch (error) {
    yield put(setRequestError(defaultRequestError));
  }
}

function* pointsWatcher(): Generator {
  yield takeLatest(POINTS_REQUESTED, pointsWorker);
}

export { pointsWatcher };
