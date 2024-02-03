import i30Image from '~/assets/images/hyundai_i30-n.png';
import { OrderRaw } from '~/src/api/types';

import { OrderSearchParams } from './types';

const defaultParams: OrderSearchParams = {
  page: 1,
  filter: {
    carId: null,
    cityId: null,
    orderStatusId: null,
  },
  filterIsDefault: true,
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
    orderStatusId: {
      id: 1,
      name: '',
    },
  },
];

export { defaultParams, orders };
