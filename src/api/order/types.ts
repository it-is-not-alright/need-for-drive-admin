import { CarRaw } from '../car/types';
import { CityRaw } from '../city/types';
import { OrderStatusRaw } from '../order-status/types';
import { PointRaw } from '../point/types';

type OrderRaw = {
  id: number;
  color: string;
  dateFrom: string;
  dateTo: string;
  isFullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
  price: number;
  carId: CarRaw;
  cityId: CityRaw;
  pointId: PointRaw;
  orderStatusId: OrderStatusRaw;
};

export { OrderRaw };
