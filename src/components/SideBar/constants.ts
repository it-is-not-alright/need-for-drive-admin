import RouteUtil from '../../route/util';
import { SideBarLink } from './types';

const links: SideBarLink[] = [
  { label: 'Заказы', route: RouteUtil.orders, iconId: 'orders' },
  { label: 'Автомобили', route: RouteUtil.cars, iconId: 'cars' },
];

export { links };
