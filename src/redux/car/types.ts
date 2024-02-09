import { FilterValues } from '~/src/components/common/DataViewer/types';

import { PayloadAction } from '../types';
import {
  CAR_FILTER_VALUES_RECIVED,
  CAR_FILTER_VALUES_REQUESTED,
} from './constants';

type CarFilterValuesRequestedAction = PayloadAction<
  typeof CAR_FILTER_VALUES_REQUESTED,
  null
>;

type CarFilterValuesRecivedAction = PayloadAction<
  typeof CAR_FILTER_VALUES_RECIVED,
  FilterValues
>;

type CarFilterValuesAction =
  | CarFilterValuesRequestedAction
  | CarFilterValuesRecivedAction;

export {
  CarFilterValuesAction,
  CarFilterValuesRecivedAction,
  CarFilterValuesRequestedAction,
};
