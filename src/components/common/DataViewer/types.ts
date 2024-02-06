import { SetURLSearchParams } from 'react-router-dom';

import { ControlItem } from '../../types';

type FilterSearchParams<T extends string> = {
  [K in T]: string | null;
};

type SearchParams<T extends string> = {
  page: number;
  filter: FilterSearchParams<T>;
  filterIsDefault: boolean;
};

interface FilterValueControlItem extends ControlItem {
  value: string;
}

type FilterValues = {
  [value: string]: FilterValueControlItem;
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
  params: SearchParams<T>;
  defaultParams: SearchParams<T>;
  filterConfig: FilterConfig<T>;
  setSearchParams: SetURLSearchParams;
  children: React.ReactNode;
};

export {
  DataViewerProps,
  FilterConfig,
  FilterSearchParams,
  FilterValueControlItem,
  FilterValues,
  SearchParams,
};