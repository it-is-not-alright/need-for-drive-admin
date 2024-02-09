import { call, put, takeLatest } from 'redux-saga/effects';

import { getOrders } from '~/src/api/services/order';
import { ArrayRequestData, OrderRaw, RequestResult } from '~/src/api/types';

import { defaultRequestError } from '../constants';
import { setRequestError } from '../request-error/actions';
import { setOrders } from './actions';
import { ORDERS_REQUESTED } from './constants';
import { OrdersRequestedAction } from './types';

function* ordersWorker(action: OrdersRequestedAction): Generator {
  try {
    const result = (yield call(getOrders, action.payload)) as RequestResult<
      ArrayRequestData<OrderRaw>
    >;
    if (result.error) {
      yield put(setRequestError(result.error));
    } else {
      yield put(setOrders(result.content));
    }
  } catch (error) {
    yield put(setRequestError(defaultRequestError));
  }
}

function* ordersWatcher(): Generator {
  yield takeLatest(ORDERS_REQUESTED, ordersWorker);
}

export { ordersWatcher };
