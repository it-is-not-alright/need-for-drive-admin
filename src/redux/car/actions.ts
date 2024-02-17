import { CarRaw } from '~/src/api/car/types';
import { ArrayRequestData } from '~/src/api/types';
import { FilterValues } from '~/src/components/common/DataViewer/types';

import {
  CAR_FILTER_VALUES_RECIVED,
  CAR_FILTER_VALUES_REQUESTED,
  CARS_RECIVED,
  CARS_REQUESTED,
} from './constants';
import {
  CarsRecivedAction,
  CarsRequestedAction,
  FilterByCarValuesRecivedAction,
  FilterByCarValuesRequestedAction,
} from './types';

const fetchFilterByCarValues = (): FilterByCarValuesRequestedAction => ({
  type: CAR_FILTER_VALUES_REQUESTED,
  payload: null,
});

const setFilterByCarValues = (
  values: FilterValues,
): FilterByCarValuesRecivedAction => ({
  type: CAR_FILTER_VALUES_RECIVED,
  payload: values,
});

const fetchCars = (payload: string): CarsRequestedAction => ({
  type: CARS_REQUESTED,
  payload,
});

const setCars = (cars: ArrayRequestData<CarRaw>): CarsRecivedAction => ({
  type: CARS_RECIVED,
  payload: cars,
});

export { fetchCars, fetchFilterByCarValues, setCars, setFilterByCarValues };
