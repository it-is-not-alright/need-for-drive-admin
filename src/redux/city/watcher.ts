import { call, put, takeLatest } from 'redux-saga/effects';

import { getFilterValues } from '~/src/api/services/city';
import { RequestResult } from '~/src/api/types';
import { FilterValues } from '~/src/components/common/DataViewer/types';

import { defaultRequestError } from '../constants';
import { setRequestError } from '../request-error/actions';
import { setCityFilterValues } from './actions';
import { CITY_FILTER_VALUES_REQUESTED } from './constants';

function* cityFilterValuesWorker(): Generator {
  try {
    const result = (yield call(getFilterValues)) as RequestResult<FilterValues>;
    if (result.error) {
      yield put(setRequestError(result.error));
    } else {
      yield put(setCityFilterValues(result.content));
    }
  } catch (error) {
    yield put(setRequestError(defaultRequestError));
  }
}

function* cityFilterValuesWatcher(): Generator {
  yield takeLatest(CITY_FILTER_VALUES_REQUESTED, cityFilterValuesWorker);
}

export { cityFilterValuesWatcher };
