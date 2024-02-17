import RouteUtil from '../../route/util';
import { SideBarLink } from './types';

const links: SideBarLink[] = [
  {
    label: 'Карточка автомобиля',
    route: RouteUtil.car,
    iconId: 'edit',
    isTemporary: true,
  },
  {
    label: 'Заказы',
    route: RouteUtil.orders,
    iconId: 'orders',
    isTemporary: false,
  },
  {
    label: 'Автомобили',
    route: RouteUtil.cars,
    iconId: 'cars',
    isTemporary: false,
  },
  {
    label: 'Пункты выдачи',
    route: RouteUtil.points,
    iconId: 'points',
    isTemporary: false,
  },
];

export { links };
