import { CarRaw } from '~/src/api/car/types';
import { ArrayRequestData } from '~/src/api/types';
import { CarFormData } from '~/src/components/pages/CarPage/types';

import { RootState } from '../reducer';
import { RequestState } from '../types';

const carsSelector = (
  state: RootState,
): RequestState<ArrayRequestData<CarRaw>> => state.cars;

const carSelector = (state: RootState): RequestState<CarFormData> => state.car;

export { carSelector, carsSelector };
