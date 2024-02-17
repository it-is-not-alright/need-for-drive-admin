import { CategorySelectItem } from '~/src/api/category/types';
import { ArrayRequestData } from '~/src/api/types';

import { PayloadAction } from '../types';
import { CATEGORIES_RECIVED, CATEGORIES_REQUESTED } from './constants';

type CategoriesRequestedAction = PayloadAction<
  typeof CATEGORIES_REQUESTED,
  null
>;

type CategoriesRecivedAction = PayloadAction<
  typeof CATEGORIES_RECIVED,
  ArrayRequestData<CategorySelectItem>
>;

type CategoriesAction = CategoriesRequestedAction | CategoriesRecivedAction;

export { CategoriesAction, CategoriesRecivedAction, CategoriesRequestedAction };
