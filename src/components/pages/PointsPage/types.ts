import { FilterConfig, SearchParams } from '../../common/DataViewer/types';

type PointFilterParam = null;

type PointSearchParams = SearchParams<PointFilterParam>;

type PointFilterConfig = FilterConfig<PointFilterParam>;

export { PointFilterConfig, PointSearchParams };
