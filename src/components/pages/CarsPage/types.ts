import { FilterConfig, SearchParams } from '../../common/DataViewer/types';

type CarFilterParam = null;

type CarSearchParams = SearchParams<CarFilterParam>;

type CarFilterConfig = FilterConfig<CarFilterParam>;

export { CarFilterConfig, CarSearchParams };
