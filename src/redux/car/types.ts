import { CarRaw } from '~/src/api/car/types';
import { ArrayRequestData } from '~/src/api/types';
import { FilterValues } from '~/src/components/common/DataViewer/types';
import { CarFormData } from '~/src/components/pages/CarPage/types';

import { PayloadAction } from '../types';
import {
  CAR_FILTER_VALUES_RECIVED,
  CAR_FILTER_VALUES_REQUESTED,
  CAR_RECIVED,
  CAR_REQUESTED,
  CAR_RESET,
  CARS_RECIVED,
  CARS_REQUESTED,
} from './constants';

type FilterByCarValuesRequestedAction = PayloadAction<
  typeof CAR_FILTER_VALUES_REQUESTED,
  null
>;

type FilterByCarValuesRecivedAction = PayloadAction<
  typeof CAR_FILTER_VALUES_RECIVED,
  FilterValues
>;

type CarsRequestedAction = PayloadAction<typeof CARS_REQUESTED, string>;

type CarsRecivedAction = PayloadAction<
  typeof CARS_RECIVED,
  ArrayRequestData<CarRaw>
>;

type FilterByCarValuesAction =
  | FilterByCarValuesRequestedAction
  | FilterByCarValuesRecivedAction;

type CarsAction = CarsRequestedAction | CarsRecivedAction;

type CarRequestedAction = PayloadAction<typeof CAR_REQUESTED, number>;

type CarRecivedAction = PayloadAction<typeof CAR_RECIVED, CarFormData>;

type CarResetAction = PayloadAction<typeof CAR_RESET, null>;

type CarAction = CarRequestedAction | CarRecivedAction | CarResetAction;

export {
  CarAction,
  CarRecivedAction,
  CarRequestedAction,
  CarResetAction,
  CarsAction,
  CarsRecivedAction,
  CarsRequestedAction,
  FilterByCarValuesAction,
  FilterByCarValuesRecivedAction,
  FilterByCarValuesRequestedAction,
};
