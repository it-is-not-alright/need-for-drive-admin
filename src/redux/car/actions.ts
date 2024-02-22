import { CarRaw } from '~/src/api/car/types';
import { ArrayRequestData } from '~/src/api/types';
import { FilterValues } from '~/src/components/common/DataViewer/types';
import { CarFormData } from '~/src/components/pages/CarPage/types';

import {
  CAR_FILTER_VALUES_RECIVED,
  CAR_FILTER_VALUES_REQUESTED,
  CAR_RECIVED,
  CAR_REQUESTED,
  CAR_RESET,
  CARS_RECIVED,
  CARS_REQUESTED,
} from './constants';
import {
  CarRecivedAction,
  CarRequestedAction,
  CarResetAction,
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

const fetchCar = (payload: number): CarRequestedAction => ({
  type: CAR_REQUESTED,
  payload,
});

const setCar = (car: CarFormData): CarRecivedAction => ({
  type: CAR_RECIVED,
  payload: car,
});

const resetCar = (): CarResetAction => ({
  type: CAR_RESET,
  payload: null,
});

export {
  fetchCar,
  fetchCars,
  fetchFilterByCarValues,
  resetCar,
  setCar,
  setCars,
  setFilterByCarValues,
};
