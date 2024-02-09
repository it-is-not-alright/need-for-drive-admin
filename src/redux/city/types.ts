import { FilterValues } from '~/src/components/common/DataViewer/types';

import { PayloadAction } from '../types';
import {
  CITY_FILTER_VALUES_RECIVED,
  CITY_FILTER_VALUES_REQUESTED,
} from './constants';

type CityFilterValuesRequestedAction = PayloadAction<
  typeof CITY_FILTER_VALUES_REQUESTED,
  null
>;

type CityFilterValuesRecivedAction = PayloadAction<
  typeof CITY_FILTER_VALUES_RECIVED,
  FilterValues
>;

type CityFilterValuesAction =
  | CityFilterValuesRequestedAction
  | CityFilterValuesRecivedAction;

export {
  CityFilterValuesAction,
  CityFilterValuesRecivedAction,
  CityFilterValuesRequestedAction,
};
