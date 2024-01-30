import { Entity } from '~/src/api/types';

import { OrderFilter, OrderFilterConfig } from './types';

const cities: Entity[] = [
  { id: 1, label: 'Ульяновск' },
  { id: 2, label: 'Казань' },
];

const cars: Entity[] = [
  { id: 1, label: 'Elantra' },
  { id: 2, label: 'Car 1' },
  { id: 3, label: 'Car 2' },
];

const initFilter: OrderFilter = {
  cityId: null,
  carId: null,
};

const filterConfig: OrderFilterConfig = {
  cityId: {
    values: cities,
    placeholder: 'Город',
  },
  carId: {
    values: cars,
    placeholder: 'Модель',
  },
};

export { filterConfig, initFilter };
