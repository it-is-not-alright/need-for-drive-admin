import { CategorySelectItem } from '~/src/api/category/types';
import { ArrayRequestData } from '~/src/api/types';

import { CATEGORIES_RECIVED, CATEGORIES_REQUESTED } from './constants';
import { CategoriesRecivedAction, CategoriesRequestedAction } from './types';

const fetchCategories = (): CategoriesRequestedAction => ({
  type: CATEGORIES_REQUESTED,
  payload: null,
});

const setCategories = (
  orders: ArrayRequestData<CategorySelectItem>,
): CategoriesRecivedAction => ({
  type: CATEGORIES_RECIVED,
  payload: orders,
});

export { fetchCategories, setCategories };
