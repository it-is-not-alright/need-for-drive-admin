import { FilterValues } from '~/src/components/common/DataViewer/types';

import {
  CITY_FILTER_VALUES_RECIVED,
  CITY_FILTER_VALUES_REQUESTED,
} from './constants';
import {
  CityFilterValuesRecivedAction,
  CityFilterValuesRequestedAction,
} from './types';

const fetchCityFilterValues = (): CityFilterValuesRequestedAction => ({
  type: CITY_FILTER_VALUES_REQUESTED,
  payload: null,
});

const setCityFilterValues = (
  values: FilterValues,
): CityFilterValuesRecivedAction => ({
  type: CITY_FILTER_VALUES_RECIVED,
  payload: values,
});

export { fetchCityFilterValues, setCityFilterValues };
