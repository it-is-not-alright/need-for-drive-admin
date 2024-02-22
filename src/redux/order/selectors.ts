import { createSelector } from 'reselect';

import { OrderRaw } from '~/src/api/order/types';
import { ArrayRequestData } from '~/src/api/types';
import { OrderFilterConfig } from '~/src/components/pages/OrdersPage/types';

import { RootState } from '../reducer';
import { RequestState } from '../types';

const ordersSelector = (
  state: RootState,
): RequestState<ArrayRequestData<OrderRaw>> => state.orders;

const orderFilterConfigSelector = createSelector(
  [
    (state: RootState) => state.filterByCityValues,
    (state: RootState) => state.filterByCarValues,
    (state: RootState) => state.filterByStatusValues,
  ],
  (cities, cars, statuses): OrderFilterConfig => {
    return {
      cityId: {
        placeholder: 'Город',
        values: cities.content,
      },
      carId: {
        placeholder: 'Модель',
        values: cars.content,
      },
      orderStatusId: {
        placeholder: 'Статус',
        values: statuses.content,
      },
    };
  },
);

export { orderFilterConfigSelector, ordersSelector };
