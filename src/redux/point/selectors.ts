import { PointRaw } from '~/src/api/point/types';
import { ArrayRequestData } from '~/src/api/types';

import { RootState } from '../reducer';
import { RequestState } from '../types';

const pointsSelector = (
  state: RootState,
): RequestState<ArrayRequestData<PointRaw>> => state.points;

export { pointsSelector };
