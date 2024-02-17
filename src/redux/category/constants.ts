import { CategorySelectItem } from '~/src/api/category/types';
import { ArrayRequestData } from '~/src/api/types';

import { RequestState } from '../types';

const CATEGORIES_REQUESTED = 'CATEGORIES_REQUESTED';
const CATEGORIES_RECIVED = 'CATEGORIES_RECIVED';

const initState: RequestState<ArrayRequestData<CategorySelectItem>> = {
  content: {
    data: [],
    count: 0,
  },
  pending: false,
};

export { CATEGORIES_RECIVED, CATEGORIES_REQUESTED, initState };
