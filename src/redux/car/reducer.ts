import { FilterValues } from '~/src/components/common/DataViewer/types';

import { RequestState } from '../types';
import {
  CAR_FILTER_VALUES_RECIVED,
  CAR_FILTER_VALUES_REQUESTED,
} from './constants';
import { CarFilterValuesAction } from './types';

const initState: RequestState<FilterValues> = {
  content: {},
  pending: false,
};

const carFilterValuesReducer = (
  state: RequestState<FilterValues> = initState,
  action: CarFilterValuesAction = null,
): RequestState<FilterValues> => {
  switch (action.type) {
    case CAR_FILTER_VALUES_REQUESTED:
      return { ...state, pending: true };
    case CAR_FILTER_VALUES_RECIVED:
      return { content: action.payload, pending: false };
    default:
      return state;
  }
};

export default carFilterValuesReducer;
