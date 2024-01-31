import i30Image from '~/assets/images/hyundai_i30-n.png';
import { Entity, OrderRaw } from '~/src/api/types';

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

const orders: OrderRaw[] = [
  {
    id: 1,
    color: 'Голубой',
    dateFrom: '1661288400916',
    dateTo: '1661590800916',
    isFullTank: true,
    isNeedChildChair: false,
    isRightWheel: false,
    price: 4300,
    carId: {
      id: 1,
      name: 'i30 N',
      thumbnail: {
        path: i30Image,
      },
    },
    cityId: {
      id: 1,
      name: 'Ульяновск',
    },
    pointId: {
      id: 1,
      name: '',
      address: 'Нариманова 42',
    },
  },
];

export { filterConfig, initFilter, orders };
