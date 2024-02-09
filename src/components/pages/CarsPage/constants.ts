import { CarSearchParams } from './types';

const defaultParams: CarSearchParams = {
  page: 0,
  filter: {},
  filterIsDefault: true,
};

const pageSize = 5;

export { defaultParams, pageSize };
