import { call, put, takeLatest } from 'redux-saga/effects';

import { getFilterValues } from '~/src/api/city/service';

import { defaultRequestError } from '../constants';
import { setRequestError } from '../request-error/actions';
import { setFilterByCityValues } from './actions';
import { FILTER_BY_CITY_VALUES_REQUESTED } from './constants';

function* filterByCityValuesWorker(): Generator {
  try {
    const result: Awaited<ReturnType<typeof getFilterValues>> =
      yield call(getFilterValues);
    if (result.error) {
      yield put(setRequestError(result.error));
    } else {
      yield put(setFilterByCityValues(result.content));
    }
  } catch (error) {
    yield put(setRequestError(defaultRequestError));
  }
}

function* filterByCityValuesWatcher(): Generator {
  yield takeLatest(FILTER_BY_CITY_VALUES_REQUESTED, filterByCityValuesWorker);
}

export { filterByCityValuesWatcher };
