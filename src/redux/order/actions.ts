import { ArrayRequestData, OrderRaw } from '~/src/api/types';

import { ORDERS_RECIVED, ORDERS_REQUESTED } from './constants';
import { OrdersRecivedAction, OrdersRequestedAction } from './types';

const fetchOrders = (params: string): OrdersRequestedAction => ({
  type: ORDERS_REQUESTED,
  payload: params,
});

const setOrders = (
  values: ArrayRequestData<OrderRaw>,
): OrdersRecivedAction => ({
  type: ORDERS_RECIVED,
  payload: values,
});

export { fetchOrders, setOrders };
