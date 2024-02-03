import { call, put, takeLatest } from 'redux-saga/effects';

import { getFilterValues } from '~/src/api/services/order-status';
import { RequestResult } from '~/src/api/types';
import { FilterValues } from '~/src/components/common/DataViewer/types';

import { defaultRequestError } from '../constants';
import { setRequestError } from '../request-error/actions';
import { setStatusFilterValues } from './actions';
import { STATUS_FILTER_VALUES_REQUESTED } from './constants';

function* statusFilterValuesWorker(): Generator {
  try {
    const result = (yield call(getFilterValues)) as RequestResult<FilterValues>;
    if (result.error) {
      yield put(setRequestError(result.error));
    } else {
      yield put(setStatusFilterValues(result.content));
    }
  } catch (error) {
    yield put(setRequestError(defaultRequestError));
  }
}

function* statusFilterValuesWatcher(): Generator {
  yield takeLatest(STATUS_FILTER_VALUES_REQUESTED, statusFilterValuesWorker);
}

export { statusFilterValuesWatcher };
