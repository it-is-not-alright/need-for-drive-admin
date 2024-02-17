import { CarRaw } from '~/src/api/car/types';
import { ArrayRequestData } from '~/src/api/types';

import { RootState } from '../reducer';
import { RequestState } from '../types';

const carsSelector = (
  state: RootState,
): RequestState<ArrayRequestData<CarRaw>> => state.cars;

export { carsSelector };
