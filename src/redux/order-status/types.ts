import { FilterValues } from '~/src/components/common/DataViewer/types';

import { PayloadAction } from '../types';
import {
  FILTER_BY_STATUS_VALUES_RECIVED,
  FILTER_BY_STATUS_VALUES_REQUESTED,
} from './constants';

type FilterByStatusValuesRequestedAction = PayloadAction<
  typeof FILTER_BY_STATUS_VALUES_REQUESTED,
  null
>;

type FilterByStatusValuesRecivedAction = PayloadAction<
  typeof FILTER_BY_STATUS_VALUES_RECIVED,
  FilterValues
>;

type FilterByStatusValuesAction =
  | FilterByStatusValuesRequestedAction
  | FilterByStatusValuesRecivedAction;

export {
  FilterByStatusValuesAction,
  FilterByStatusValuesRecivedAction,
  FilterByStatusValuesRequestedAction,
};
