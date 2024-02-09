import { ArrayRequestData, OrderRaw } from '~/src/api/types';

import { RequestState } from '../types';
import { ORDERS_RECIVED, ORDERS_REQUESTED } from './constants';
import { OrdersAction } from './types';

const initState: RequestState<ArrayRequestData<OrderRaw>> = {
  content: {
    data: [],
    count: 0,
  },
  pending: false,
};

const ordersReducer = (
  state: RequestState<ArrayRequestData<OrderRaw>> = initState,
  action: OrdersAction = null,
): RequestState<ArrayRequestData<OrderRaw>> => {
  switch (action.type) {
    case ORDERS_REQUESTED:
      return { ...state, pending: true };
    case ORDERS_RECIVED:
      return { content: action.payload, pending: false };
    default:
      return state;
  }
};

export { ordersReducer };
