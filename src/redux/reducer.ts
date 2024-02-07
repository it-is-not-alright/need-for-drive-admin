import { combineReducers } from 'redux';

import authReducer from './auth/reducer';
import { carFilterValuesReducer, carsReducer } from './car/reducers';
import cityFilterValuesReducer from './city/reducer';
import ordersReducer from './order/reducer';
import statusFilterValuesReducer from './order-status/reducer';
import requestErrorReducer from './request-error/reducer';

const rootReducer = combineReducers({
  authState: authReducer,
  requestError: requestErrorReducer,
  carFilterValues: carFilterValuesReducer,
  cityFilterValues: cityFilterValuesReducer,
  statusFilterValues: statusFilterValuesReducer,
  orders: ordersReducer,
  cars: carsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
