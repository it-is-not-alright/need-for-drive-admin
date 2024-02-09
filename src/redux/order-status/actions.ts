import { FilterValues } from '~/src/components/common/DataViewer/types';

import {
  STATUS_FILTER_VALUES_RECIVED,
  STATUS_FILTER_VALUES_REQUESTED,
} from './constants';
import {
  StatusFilterValuesRecivedAction,
  StatusFilterValuesRequestedAction,
} from './types';

const fetchStatusFilterValues = (): StatusFilterValuesRequestedAction => ({
  type: STATUS_FILTER_VALUES_REQUESTED,
  payload: null,
});

const setStatusFilterValues = (
  values: FilterValues,
): StatusFilterValuesRecivedAction => ({
  type: STATUS_FILTER_VALUES_RECIVED,
  payload: values,
});

export { fetchStatusFilterValues, setStatusFilterValues };
