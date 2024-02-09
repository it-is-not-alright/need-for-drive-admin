import { OrderSearchParams } from './types';

const defaultParams: OrderSearchParams = {
  page: 0,
  filter: {
    carId: null,
    cityId: null,
    orderStatusId: null,
  },
  filterIsDefault: true,
};

const pageSize = 5;

export { defaultParams, pageSize };
