import { FilterValues } from '~/src/components/common/DataViewer/types';

import { RootState } from '../reducer';
import { RequestState } from '../types';

const statusFilterValuesSelector = (
  state: RootState,
): RequestState<FilterValues> => state.statusFilterValues;

export { statusFilterValuesSelector };
