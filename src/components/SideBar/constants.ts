import RouteUtil from '../../route/util';
import { SideBarLink } from './types';

const links: SideBarLink[] = [
  {
    label: 'Заказы',
    route: RouteUtil.orders,
    iconId: 'orders',
  },
  {
    label: 'Автомобили',
    route: RouteUtil.cars,
    iconId: 'cars',
  },
  {
    label: 'Карточка автомобиля',
    route: RouteUtil.car,
    iconId: 'edit',
  },
  {
    label: 'Пункты выдачи',
    route: RouteUtil.points,
    iconId: 'points',
  },
];

export { links };
