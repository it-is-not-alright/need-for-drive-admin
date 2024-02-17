import { FilterValues } from '~/src/components/common/DataViewer/types';

import {
  FILTER_BY_CITY_VALUES_RECIVED,
  FILTER_BY_CITY_VALUES_REQUESTED,
} from './constants';
import {
  FilterByCityValuesRecivedAction,
  FilterByCityValuesRequestedAction,
} from './types';

const fetchFilterByCityValues = (): FilterByCityValuesRequestedAction => ({
  type: FILTER_BY_CITY_VALUES_REQUESTED,
  payload: null,
});

const setFilterByCityValues = (
  values: FilterValues,
): FilterByCityValuesRecivedAction => ({
  type: FILTER_BY_CITY_VALUES_RECIVED,
  payload: values,
});

export { fetchFilterByCityValues, setFilterByCityValues };
