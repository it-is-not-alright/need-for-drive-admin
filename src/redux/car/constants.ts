import { CarRaw } from '~/src/api/car/types';
import { ArrayRequestData } from '~/src/api/types';
import { FilterValues } from '~/src/components/common/DataViewer/types';
import { initCarFormData } from '~/src/components/pages/CarPage/constants';
import { CarFormData } from '~/src/components/pages/CarPage/types';

import { RequestState } from '../types';

const CAR_FILTER_VALUES_REQUESTED = 'CAR_FILTER_VALUES_REQUESTED';
const CAR_FILTER_VALUES_RECIVED = 'CAR_FILTER_VALUES_RECIVED';
const CARS_REQUESTED = 'CARS_REQUESTED';
const CARS_RECIVED = 'CARS_RECIVED';
const CAR_REQUESTED = 'CAR_REQUESTED';
const CAR_RECIVED = 'CAR_RECIVED';
const CAR_RESET = 'CAR_RESET';

const initFilterValuesState: RequestState<FilterValues> = {
  content: {},
  pending: false,
};

const initCarsState: RequestState<ArrayRequestData<CarRaw>> = {
  content: {
    data: [],
    count: 0,
  },
  pending: false,
};

const initCarState: RequestState<CarFormData> = {
  content: initCarFormData,
  pending: false,
};

export {
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
};
