import { OrderRaw } from '~/src/api/order/types';
import { ArrayRequestData } from '~/src/api/types';

import { ORDERS_RECIVED, ORDERS_REQUESTED } from './constants';
import { OrdersRecivedAction, OrdersRequestedAction } from './types';

const fetchOrders = (params: string): OrdersRequestedAction => ({
  type: ORDERS_REQUESTED,
  payload: params,
});

const setOrders = (
  orders: ArrayRequestData<OrderRaw>,
): OrdersRecivedAction => ({
  type: ORDERS_RECIVED,
  payload: orders,
});

export { fetchOrders, setOrders };
