import { all, fork } from 'redux-saga/effects';

import { authWatcher } from './auth/watcher';
import { carFilterValuesWatcher } from './car/watcher';
import { cityFilterValuesWatcher } from './city/watcher';
import { ordersWatcher } from './order/watcher';
import { statusFilterValuesWatcher } from './order-status/watcher';

function* rootSaga(): Generator {
  yield all([
    fork(authWatcher),
    fork(carFilterValuesWatcher),
    fork(cityFilterValuesWatcher),
    fork(statusFilterValuesWatcher),
    fork(ordersWatcher),
  ]);
}

export default rootSaga;
