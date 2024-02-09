import { FilterValues } from '~/src/components/common/DataViewer/types';

import { PayloadAction } from '../types';
import {
  STATUS_FILTER_VALUES_RECIVED,
  STATUS_FILTER_VALUES_REQUESTED,
} from './constants';

type StatusFilterValuesRequestedAction = PayloadAction<
  typeof STATUS_FILTER_VALUES_REQUESTED,
  null
>;

type StatusFilterValuesRecivedAction = PayloadAction<
  typeof STATUS_FILTER_VALUES_RECIVED,
  FilterValues
>;

type StatusFilterValuesAction =
  | StatusFilterValuesRequestedAction
  | StatusFilterValuesRecivedAction;

export {
  StatusFilterValuesAction,
  StatusFilterValuesRecivedAction,
  StatusFilterValuesRequestedAction,
};
