import { ArrayRequestData, CarRaw } from '~/src/api/types';
import { FilterValues } from '~/src/components/common/DataViewer/types';

import { RequestState } from '../types';
import {
  CAR_FILTER_VALUES_RECIVED,
  CAR_FILTER_VALUES_REQUESTED,
  CARS_RECIVED,
  CARS_REQUESTED,
  initCarsState,
  initFilterValuesState,
} from './constants';
import { CarFilterValuesAction, CarsAction } from './types';

const carFilterValuesReducer = (
  state: RequestState<FilterValues> = initFilterValuesState,
  action: CarFilterValuesAction = null,
): RequestState<FilterValues> => {
  switch (action.type) {
    case CAR_FILTER_VALUES_REQUESTED:
      return { ...state, pending: true };
    case CAR_FILTER_VALUES_RECIVED:
      return { content: action.payload, pending: false };
    default:
      return state;
  }
};

const carsReducer = (
  state: RequestState<ArrayRequestData<CarRaw>> = initCarsState,
  action: CarsAction = null,
): RequestState<ArrayRequestData<CarRaw>> => {
  switch (action.type) {
    case CARS_REQUESTED:
      return { ...state, pending: true };
    case CARS_RECIVED:
      return { content: action.payload, pending: false };
    default:
      return state;
  }
};

export { carFilterValuesReducer, carsReducer };
