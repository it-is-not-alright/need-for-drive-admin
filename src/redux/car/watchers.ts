import { call, put, takeLatest } from 'redux-saga/effects';

import { getCar, getCars, getFilterValues } from '~/src/api/car/service';

import { defaultRequestError } from '../constants';
import { setRequestError } from '../request-error/actions';
import { setCar, setCars, setFilterByCarValues } from './actions';
import {
  CAR_FILTER_VALUES_REQUESTED,
  CAR_REQUESTED,
  CARS_REQUESTED,
} from './constants';
import { CarRequestedAction, CarsRequestedAction } from './types';

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

function* carWorker(action: CarRequestedAction): Generator {
  try {
    const result: Awaited<ReturnType<typeof getCar>> = yield call(
      getCar,
      action.payload,
    );
    if (result.error) {
      yield put(setRequestError(result.error));
    } else {
      yield put(setCar(result.content));
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

function* carWatcher(): Generator {
  yield takeLatest(CAR_REQUESTED, carWorker);
}

export { carsWatcher, carWatcher, filterByCarValuesWatcher };
