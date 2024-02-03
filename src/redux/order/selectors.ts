import { ArrayRequestData, OrderRaw } from '~/src/api/types';

import { RootState } from '../reducer';
import { RequestState } from '../types';

const ordersSelector = (
  state: RootState,
): RequestState<ArrayRequestData<OrderRaw>> => state.orders;

export { ordersSelector };
