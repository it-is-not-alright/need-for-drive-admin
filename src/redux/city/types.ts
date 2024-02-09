import { FilterValues } from '~/src/components/common/DataViewer/types';

import { PayloadAction } from '../types';
import {
  FILTER_BY_CITY_VALUES_RECIVED,
  FILTER_BY_CITY_VALUES_REQUESTED,
} from './constants';

type FilterByCityValuesRequestedAction = PayloadAction<
  typeof FILTER_BY_CITY_VALUES_REQUESTED,
  null
>;

type FilterByCityValuesRecivedAction = PayloadAction<
  typeof FILTER_BY_CITY_VALUES_RECIVED,
  FilterValues
>;

type FilterByCityValuesAction =
  | FilterByCityValuesRequestedAction
  | FilterByCityValuesRecivedAction;

export {
  FilterByCityValuesAction,
  FilterByCityValuesRecivedAction,
  FilterByCityValuesRequestedAction,
};
