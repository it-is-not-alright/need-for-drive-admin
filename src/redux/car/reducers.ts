import { CarRaw } from '~/src/api/car/types';
import { ArrayRequestData } from '~/src/api/types';
import { FilterValues } from '~/src/components/common/DataViewer/types';
import { CarFormData } from '~/src/components/pages/CarPage/types';

import { RequestState } from '../types';
import {
  CAR_FILTER_VALUES_RECIVED,
  CAR_FILTER_VALUES_REQUESTED,
  CAR_RECIVED,
  CAR_REQUESTED,
  CAR_RESET,
  CARS_RECIVED,
  CARS_REQUESTED,
  initCarsState,
  initCarState,
  initFilterValuesState,
} from './constants';
import { CarAction, CarsAction, FilterByCarValuesAction } from './types';

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

const carReducer = (
  state: RequestState<CarFormData> = initCarState,
  action: CarAction = null,
): RequestState<CarFormData> => {
  switch (action.type) {
    case CAR_REQUESTED:
      return { ...state, pending: true };
    case CAR_RECIVED:
      return { content: action.payload, pending: false };
    case CAR_RESET:
      return initCarState;
    default:
      return state;
  }
};

export { carReducer, carsReducer, filterByCarValuesReducer };
