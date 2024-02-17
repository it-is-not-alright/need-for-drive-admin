import { all, fork } from 'redux-saga/effects';

import { authWatcher } from './auth/watchers';
import {
  carsWatcher,
  carWatcher,
  filterByCarValuesWatcher,
} from './car/watchers';
import { categoriesWatcher } from './category/watchers';
import { filterByCityValuesWatcher } from './city/watchers';
import { ordersWatcher } from './order/watchers';
import { filterByStatusValuesWatcher } from './order-status/watchers';
import { pointsWatcher } from './point/watchers';

function* rootSaga(): Generator {
  yield all([
    fork(authWatcher),
    fork(filterByCarValuesWatcher),
    fork(filterByCityValuesWatcher),
    fork(filterByStatusValuesWatcher),
    fork(ordersWatcher),
    fork(carsWatcher),
    fork(carWatcher),
    fork(pointsWatcher),
    fork(categoriesWatcher),
  ]);
}

export default rootSaga;
