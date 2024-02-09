import { ArrayRequestData, CarRaw } from '~/src/api/types';
import { FilterValues } from '~/src/components/common/DataViewer/types';

import { PayloadAction } from '../types';
import {
  CAR_FILTER_VALUES_RECIVED,
  CAR_FILTER_VALUES_REQUESTED,
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

export {
  CarsAction,
  CarsRecivedAction,
  CarsRequestedAction,
  FilterByCarValuesAction,
  FilterByCarValuesRecivedAction,
  FilterByCarValuesRequestedAction,
};
