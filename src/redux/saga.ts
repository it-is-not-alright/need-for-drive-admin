import { all, fork } from 'redux-saga/effects';

import { authWatcher } from './auth/watcher';
import { carsWatcher, filterByCarValuesWatcher } from './car/watchers';
import { filterByCityValuesWatcher } from './city/watcher';
import { ordersWatcher } from './order/watcher';
import { filterByStatusValuesWatcher } from './order-status/watcher';
import { pointsWatcher } from './point/watcher';

function* rootSaga(): Generator {
  yield all([
    fork(authWatcher),
    fork(filterByCarValuesWatcher),
    fork(filterByCityValuesWatcher),
    fork(filterByStatusValuesWatcher),
    fork(ordersWatcher),
    fork(carsWatcher),
    fork(pointsWatcher),
  ]);
}

export default rootSaga;
