import { AnyAction } from 'redux-saga';

import { SelectItem } from '../Select/types';

type FilterSearchParams<T extends string> = {
  [K in T]: string | null;
};

type SearchParams<T extends string> = {
  page: number;
  filter: FilterSearchParams<T>;
  filterIsDefault: boolean;
};

interface FilterValueSelectItem extends SelectItem {
  value: string;
}

type FilterValues = {
  [value: string]: FilterValueSelectItem;
};

type FilterConfig<T extends string> = {
  [K in T]: {
    placeholder: string;
    values: FilterValues;
  };
};

type DataViewerProps<T extends string> = {
  limit: number;
  total: number;
  defaultParams: SearchParams<T>;
  filterConfig?: FilterConfig<T>;
  fetchData: (params: string) => AnyAction;
  children: React.ReactNode;
};

export {
  DataViewerProps,
  FilterConfig,
  FilterSearchParams,
  FilterValues,
  FilterValueSelectItem,
  SearchParams,
};
