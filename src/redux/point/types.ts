import { ArrayRequestData, PointRaw } from '~/src/api/types';

import { PayloadAction } from '../types';
import { POINTS_RECIVED, POINTS_REQUESTED } from './constants';

type PointsRequestedAction = PayloadAction<typeof POINTS_REQUESTED, string>;

type PointsRecivedAction = PayloadAction<
  typeof POINTS_RECIVED,
  ArrayRequestData<PointRaw>
>;

type PointsAction = PointsRequestedAction | PointsRecivedAction;

export { PointsAction, PointsRecivedAction, PointsRequestedAction };
