import { ArrayRequestData, CarRaw } from '~/src/api/types';
import { FilterValues } from '~/src/components/common/DataViewer/types';

import {
  CAR_FILTER_VALUES_RECIVED,
  CAR_FILTER_VALUES_REQUESTED,
  CARS_RECIVED,
  CARS_REQUESTED,
} from './constants';
import {
  CarFilterValuesRecivedAction,
  CarFilterValuesRequestedAction,
  CarsRecivedAction,
  CarsRequestedAction,
} from './types';

const fetchCarFilterValues = (): CarFilterValuesRequestedAction => ({
  type: CAR_FILTER_VALUES_REQUESTED,
  payload: null,
});

const setCarFilterValues = (
  values: FilterValues,
): CarFilterValuesRecivedAction => ({
  type: CAR_FILTER_VALUES_RECIVED,
  payload: values,
});

const fetchCars = (): CarsRequestedAction => ({
  type: CARS_REQUESTED,
  payload: null,
});

const setCars = (cars: ArrayRequestData<CarRaw>): CarsRecivedAction => ({
  type: CARS_RECIVED,
  payload: cars,
});

export { fetchCarFilterValues, fetchCars, setCarFilterValues, setCars };
