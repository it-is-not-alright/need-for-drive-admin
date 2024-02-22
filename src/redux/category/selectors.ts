import { CategorySelectItem } from '~/src/api/category/types';
import { ArrayRequestData } from '~/src/api/types';

import { RootState } from '../reducer';
import { RequestState } from '../types';

const categoriesSelector = (
  state: RootState,
): RequestState<ArrayRequestData<CategorySelectItem>> => state.categories;

export { categoriesSelector };
