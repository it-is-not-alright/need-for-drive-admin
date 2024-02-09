import { call, put, takeLatest } from 'redux-saga/effects';

import { getFilterValues } from '~/src/api/services/order-status';
import { RequestResult } from '~/src/api/types';
import { FilterValues } from '~/src/components/common/DataViewer/types';

import { defaultRequestError } from '../constants';
import { setRequestError } from '../request-error/actions';
import { setFilterByStatusValues } from './actions';
import { FILTER_BY_STATUS_VALUES_REQUESTED } from './constants';

function* filterByStatusValuesWorker(): Generator {
  try {
    const result = (yield call(getFilterValues)) as RequestResult<FilterValues>;
    if (result.error) {
      yield put(setRequestError(result.error));
    } else {
      yield put(setFilterByStatusValues(result.content));
    }
  } catch (error) {
    yield put(setRequestError(defaultRequestError));
  }
}

function* filterByStatusValuesWatcher(): Generator {
  yield takeLatest(
    FILTER_BY_STATUS_VALUES_REQUESTED,
    filterByStatusValuesWorker,
  );
}

export { filterByStatusValuesWatcher };
