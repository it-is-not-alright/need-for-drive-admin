import { ArrayRequestData, PointRaw } from '~/src/api/types';

import { POINTS_RECIVED, POINTS_REQUESTED } from './constants';
import { PointsRecivedAction, PointsRequestedAction } from './types';

const fetchPoints = (payload: string): PointsRequestedAction => ({
  type: POINTS_REQUESTED,
  payload,
});

const setPoints = (
  points: ArrayRequestData<PointRaw>,
): PointsRecivedAction => ({
  type: POINTS_RECIVED,
  payload: points,
});

export { fetchPoints, setPoints };
