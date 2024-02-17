import { combineReducers } from 'redux';

import { authReducer } from './auth/reducers';
import { carsReducer, filterByCarValuesReducer } from './car/reducers';
import { filterByCityValuesReducer } from './city/reducers';
import { ordersReducer } from './order/reducers';
import { filterByStatusValuesReducer } from './order-status/reducers';
import { pointsReducer } from './point/reducers';
import { requestErrorReducer } from './request-error/reducers';

const rootReducer = combineReducers({
  authState: authReducer,
  requestError: requestErrorReducer,
  filterByCarValues: filterByCarValuesReducer,
  filterByCityValues: filterByCityValuesReducer,
  filterByStatusValues: filterByStatusValuesReducer,
  orders: ordersReducer,
  cars: carsReducer,
  points: pointsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
