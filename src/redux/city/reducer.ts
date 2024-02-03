import { FilterValues } from '~/src/components/common/DataViewer/types';

import { RequestState } from '../types';
import {
  CITY_FILTER_VALUES_RECIVED,
  CITY_FILTER_VALUES_REQUESTED,
} from './constants';
import { CityFilterValuesAction } from './types';

const initState: RequestState<FilterValues> = {
  data: {},
  pending: false,
};

const cityFilterValuesReducer = (
  state: RequestState<FilterValues> = initState,
  action: CityFilterValuesAction = null,
): RequestState<FilterValues> => {
  switch (action.type) {
    case CITY_FILTER_VALUES_REQUESTED:
      return { ...state, pending: true };
    case CITY_FILTER_VALUES_RECIVED:
      return { data: action.payload, pending: false };
    default:
      return state;
  }
};

export default cityFilterValuesReducer;
