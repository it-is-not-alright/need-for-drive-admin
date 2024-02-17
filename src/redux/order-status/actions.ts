import { FilterValues } from '~/src/components/common/DataViewer/types';

import {
  FILTER_BY_STATUS_VALUES_RECIVED,
  FILTER_BY_STATUS_VALUES_REQUESTED,
} from './constants';
import {
  FilterByStatusValuesRecivedAction,
  FilterByStatusValuesRequestedAction,
} from './types';

const fetchFilterByStatusValues = (): FilterByStatusValuesRequestedAction => ({
  type: FILTER_BY_STATUS_VALUES_REQUESTED,
  payload: null,
});

const setFilterByStatusValues = (
  values: FilterValues,
): FilterByStatusValuesRecivedAction => ({
  type: FILTER_BY_STATUS_VALUES_RECIVED,
  payload: values,
});

export { fetchFilterByStatusValues, setFilterByStatusValues };
