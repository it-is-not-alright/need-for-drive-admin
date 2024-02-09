import { call, put, takeLatest } from 'redux-saga/effects';

import { getFilterValues } from '~/src/api/services/car';
import { RequestResult } from '~/src/api/types';
import { FilterValues } from '~/src/components/common/DataViewer/types';

import { defaultRequestError } from '../constants';
import { setRequestError } from '../request-error/actions';
import { setCarFilterValues } from './actions';
import { CAR_FILTER_VALUES_REQUESTED } from './constants';

function* carFilterValuesWorker(): Generator {
  try {
    const result = (yield call(getFilterValues)) as RequestResult<FilterValues>;
    if (result.error) {
      yield put(setRequestError(result.error));
    } else {
      yield put(setCarFilterValues(result.content));
    }
  } catch (error) {
    yield put(setRequestError(defaultRequestError));
  }
}

function* carFilterValuesWatcher(): Generator {
  yield takeLatest(CAR_FILTER_VALUES_REQUESTED, carFilterValuesWorker);
}

export { carFilterValuesWatcher };
