import { call, put, takeLatest } from 'redux-saga/effects';

import { getCars, getFilterValues } from '~/src/api/services/car';
import { ArrayRequestData, CarRaw, RequestResult } from '~/src/api/types';
import { FilterValues } from '~/src/components/common/DataViewer/types';

import { defaultRequestError } from '../constants';
import { setRequestError } from '../request-error/actions';
import { setCarFilterValues, setCars } from './actions';
import { CAR_FILTER_VALUES_REQUESTED, CARS_REQUESTED } from './constants';

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

function* carsWorker(): Generator {
  try {
    const result = (yield call(getCars, '?tank=2897')) as RequestResult<
      ArrayRequestData<CarRaw>
    >;
    if (result.error) {
      yield put(setRequestError(result.error));
    } else {
      yield put(setCars(result.content));
    }
  } catch (error) {
    yield put(setRequestError(defaultRequestError));
  }
}

function* carFilterValuesWatcher(): Generator {
  yield takeLatest(CAR_FILTER_VALUES_REQUESTED, carFilterValuesWorker);
}

function* carsWatcher(): Generator {
  yield takeLatest(CARS_REQUESTED, carsWorker);
}

export { carFilterValuesWatcher, carsWatcher };
