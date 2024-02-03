import { FilterValues } from '~/src/components/common/DataViewer/types';

import { RootState } from '../reducer';
import { RequestState } from '../types';

const carFilterValuesSelector = (
  state: RootState,
): RequestState<FilterValues> => state.carFilterValues;

export { carFilterValuesSelector };
