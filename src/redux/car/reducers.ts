import { CarRaw } from '~/src/api/car/types';
import { ArrayRequestData } from '~/src/api/types';
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
import { CarsAction, FilterByCarValuesAction } from './types';

const filterByCarValuesReducer = (
  state: RequestState<FilterValues> = initFilterValuesState,
  action: FilterByCarValuesAction = null,
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

export { carsReducer, filterByCarValuesReducer };
