import { ArrayRequestData, CarRaw } from '~/src/api/types';
import { FilterValues } from '~/src/components/common/DataViewer/types';

import { PayloadAction } from '../types';
import {
  CAR_FILTER_VALUES_RECIVED,
  CAR_FILTER_VALUES_REQUESTED,
  CARS_RECIVED,
  CARS_REQUESTED,
} from './constants';

type CarFilterValuesRequestedAction = PayloadAction<
  typeof CAR_FILTER_VALUES_REQUESTED,
  null
>;

type CarFilterValuesRecivedAction = PayloadAction<
  typeof CAR_FILTER_VALUES_RECIVED,
  FilterValues
>;

type CarsRequestedAction = PayloadAction<typeof CARS_REQUESTED, null>;

type CarsRecivedAction = PayloadAction<
  typeof CARS_RECIVED,
  ArrayRequestData<CarRaw>
>;

type CarFilterValuesAction =
  | CarFilterValuesRequestedAction
  | CarFilterValuesRecivedAction;

type CarsAction = CarsRequestedAction | CarsRecivedAction;

export {
  CarFilterValuesAction,
  CarFilterValuesRecivedAction,
  CarFilterValuesRequestedAction,
  CarsAction,
  CarsRecivedAction,
  CarsRequestedAction,
};
