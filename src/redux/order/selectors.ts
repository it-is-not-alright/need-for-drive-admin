import { createSelector } from 'reselect';

import { ArrayRequestData, OrderRaw } from '~/src/api/types';
import { OrderFilterConfig } from '~/src/components/pages/OrdersPage/types';

import { RootState } from '../reducer';
import { RequestState } from '../types';

const ordersSelector = (
  state: RootState,
): RequestState<ArrayRequestData<OrderRaw>> => state.orders;

const orderFilterConfigSelector = createSelector(
  [
    (state: RootState) => state.cityFilterValues,
    (state: RootState) => state.carFilterValues,
    (state: RootState) => state.statusFilterValues,
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
