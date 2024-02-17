import { CategorySelectItem } from '~/src/api/category/types';
import { ArrayRequestData } from '~/src/api/types';

import { RequestState } from '../types';
import {
  CATEGORIES_RECIVED,
  CATEGORIES_REQUESTED,
  initState,
} from './constants';
import { CategoriesAction } from './types';

const categoriesReducer = (
  state: RequestState<ArrayRequestData<CategorySelectItem>> = initState,
  action: CategoriesAction = null,
): RequestState<ArrayRequestData<CategorySelectItem>> => {
  switch (action.type) {
    case CATEGORIES_REQUESTED:
      return { ...state, pending: true };
    case CATEGORIES_RECIVED:
      return { content: action.payload, pending: false };
    default:
      return state;
  }
};

export { categoriesReducer };
