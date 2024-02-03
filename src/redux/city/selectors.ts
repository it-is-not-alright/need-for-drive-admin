import { FilterValues } from '~/src/components/common/DataViewer/types';

import { RootState } from '../reducer';
import { RequestState } from '../types';

const cityFilterValuesSelector = (
  state: RootState,
): RequestState<FilterValues> => state.cityFilterValues;

export { cityFilterValuesSelector };
