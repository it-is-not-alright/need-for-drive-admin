import { call, put, takeLatest } from 'redux-saga/effects';

import { getCars, getFilterValues } from '~/src/api/services/car';

import { defaultRequestError } from '../constants';
import { setRequestError } from '../request-error/actions';
import { setCars, setFilterByCarValues } from './actions';
import { CAR_FILTER_VALUES_REQUESTED, CARS_REQUESTED } from './constants';
import { CarsRequestedAction } from './types';

function* filterByCarValuesWorker(): Generator {
  try {
    const result: Awaited<ReturnType<typeof getFilterValues>> =
      yield call(getFilterValues);
    if (result.error) {
      yield put(setRequestError(result.error));
    } else {
      yield put(setFilterByCarValues(result.content));
    }
  } catch (error) {
    yield put(setRequestError(defaultRequestError));
  }
}

function* carsWorker(action: CarsRequestedAction): Generator {
  try {
    const result: Awaited<ReturnType<typeof getCars>> = yield call(
      getCars,
      action.payload,
    );
    if (result.error) {
      yield put(setRequestError(result.error));
    } else {
      yield put(setCars(result.content));
    }
  } catch (error) {
    yield put(setRequestError(defaultRequestError));
  }
}

function* filterByCarValuesWatcher(): Generator {
  yield takeLatest(CAR_FILTER_VALUES_REQUESTED, filterByCarValuesWorker);
}

function* carsWatcher(): Generator {
  yield takeLatest(CARS_REQUESTED, carsWorker);
}

export { carsWatcher, filterByCarValuesWatcher };
