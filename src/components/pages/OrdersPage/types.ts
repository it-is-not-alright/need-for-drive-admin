import { FilterConfig, SearchParams } from '../../common/DataViewer/types';

type OrderFilterParam = 'cityId' | 'carId' | 'orderStatusId';

type OrderSearchParams = SearchParams<OrderFilterParam>;

type OrderFilterConfig = FilterConfig<OrderFilterParam>;

export { OrderFilterConfig, OrderSearchParams };
