import { FilterValues } from '~/src/components/common/DataViewer/types';

import { RequestState } from '../types';
import {
  FILTER_BY_CITY_VALUES_RECIVED,
  FILTER_BY_CITY_VALUES_REQUESTED,
} from './constants';
import { FilterByCityValuesAction } from './types';

const initState: RequestState<FilterValues> = {
  content: {},
  pending: false,
};

const filterByCityValuesReducer = (
  state: RequestState<FilterValues> = initState,
  action: FilterByCityValuesAction = null,
): RequestState<FilterValues> => {
  switch (action.type) {
    case FILTER_BY_CITY_VALUES_REQUESTED:
      return { ...state, pending: true };
    case FILTER_BY_CITY_VALUES_RECIVED:
      return { content: action.payload, pending: false };
    default:
      return state;
  }
};

export { filterByCityValuesReducer };
