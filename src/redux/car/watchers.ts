import { call, put, takeLatest } from 'redux-saga/effects';

import { getCars, getFilterValues } from '~/src/api/services/car';
import { ArrayRequestData, CarRaw, RequestResult } from '~/src/api/types';
import { FilterValues } from '~/src/components/common/DataViewer/types';

import { defaultRequestError } from '../constants';
import { setRequestError } from '../request-error/actions';
import { setCars, setFilterByCarValues } from './actions';
import { CAR_FILTER_VALUES_REQUESTED, CARS_REQUESTED } from './constants';
import { CarsRequestedAction } from './types';

function* filterByCarValuesWorker(): Generator {
  try {
    const result = (yield call(getFilterValues)) as RequestResult<FilterValues>;
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
    const result = (yield call(getCars, action.payload)) as RequestResult<
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

function* filterByCarValuesWatcher(): Generator {
  yield takeLatest(CAR_FILTER_VALUES_REQUESTED, filterByCarValuesWorker);
}

function* carsWatcher(): Generator {
  yield takeLatest(CARS_REQUESTED, carsWorker);
}

export { carsWatcher, filterByCarValuesWatcher };
