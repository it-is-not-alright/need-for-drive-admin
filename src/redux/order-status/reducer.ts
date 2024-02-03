import { FilterValues } from '~/src/components/common/DataViewer/types';

import { RequestState } from '../types';
import {
  STATUS_FILTER_VALUES_RECIVED,
  STATUS_FILTER_VALUES_REQUESTED,
} from './constants';
import { StatusFilterValuesAction } from './types';

const initState: RequestState<FilterValues> = {
  data: {},
  pending: false,
};

const statusFilterValuesReducer = (
  state: RequestState<FilterValues> = initState,
  action: StatusFilterValuesAction = null,
): RequestState<FilterValues> => {
  switch (action.type) {
    case STATUS_FILTER_VALUES_REQUESTED:
      return { ...state, pending: true };
    case STATUS_FILTER_VALUES_RECIVED:
      return { data: action.payload, pending: false };
    default:
      return state;
  }
};

export default statusFilterValuesReducer;
