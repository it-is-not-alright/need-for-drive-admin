import { ArrayRequestData, PointRaw } from '~/src/api/types';

import { RequestState } from '../types';
import { POINTS_RECIVED, POINTS_REQUESTED } from './constants';
import { PointsAction } from './types';

const initPointsState: RequestState<ArrayRequestData<PointRaw>> = {
  content: {
    data: [],
    count: 0,
  },
  pending: false,
};

const pointsReducer = (
  state: RequestState<ArrayRequestData<PointRaw>> = initPointsState,
  action: PointsAction = null,
): RequestState<ArrayRequestData<PointRaw>> => {
  switch (action.type) {
    case POINTS_REQUESTED:
      return { ...state, pending: true };
    case POINTS_RECIVED:
      return { content: action.payload, pending: false };
    default:
      return state;
  }
};

export { pointsReducer };
