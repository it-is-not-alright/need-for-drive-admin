import { all, fork } from 'redux-saga/effects';

import { authWatcher } from './auth/watcher';
import { carFilterValuesWatcher, carsWatcher } from './car/watchers';
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
    fork(carsWatcher),
  ]);
}

export default rootSaga;
