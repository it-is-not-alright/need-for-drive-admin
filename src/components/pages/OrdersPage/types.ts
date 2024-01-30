import { Entity } from '~/src/api/types';

import { Filter, FilterConfig } from '../../common/DataViewer/types';

interface OrderFilter extends Filter {
  cityId: Entity | null;
  carId: Entity | null;
}

type OrderFilterConfig = FilterConfig<OrderFilter>;

export { OrderFilter, OrderFilterConfig };
