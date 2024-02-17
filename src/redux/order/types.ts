import { OrderRaw } from '~/src/api/order/types';
import { ArrayRequestData } from '~/src/api/types';

import { PayloadAction } from '../types';
import { ORDERS_RECIVED, ORDERS_REQUESTED } from './constants';

type OrdersRequestedAction = PayloadAction<typeof ORDERS_REQUESTED, string>;

type OrdersRecivedAction = PayloadAction<
  typeof ORDERS_RECIVED,
  ArrayRequestData<OrderRaw>
>;

type OrdersAction = OrdersRequestedAction | OrdersRecivedAction;

export { OrdersAction, OrdersRecivedAction, OrdersRequestedAction };
