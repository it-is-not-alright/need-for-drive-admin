import { FilterValues } from '~/src/components/common/DataViewer/types';

import {
  CAR_FILTER_VALUES_RECIVED,
  CAR_FILTER_VALUES_REQUESTED,
} from './constants';
import {
  CarFilterValuesRecivedAction,
  CarFilterValuesRequestedAction,
} from './types';

const fetchCarFilterValues = (): CarFilterValuesRequestedAction => ({
  type: CAR_FILTER_VALUES_REQUESTED,
  payload: null,
});

const setCarFilterValues = (
  values: FilterValues,
): CarFilterValuesRecivedAction => ({
  type: CAR_FILTER_VALUES_RECIVED,
  payload: values,
});

export { fetchCarFilterValues, setCarFilterValues };
