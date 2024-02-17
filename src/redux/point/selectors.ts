import { ArrayRequestData, PointRaw } from '~/src/api/types';

import { RootState } from '../reducer';
import { RequestState } from '../types';

const pointsSelector = (
  state: RootState,
): RequestState<ArrayRequestData<PointRaw>> => state.points;

export { pointsSelector };
