import { Entity } from '~/src/api/types';

type Filter = {
  [field: string]: Entity | null;
};

type FilterConfig<T extends Filter> = {
  [K in keyof T]: {
    values: Entity[];
    placeholder: string;
  };
};

type DataViewerProps<T extends Filter> = {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
  initFilter: T;
  filterConfig: FilterConfig<T>;
  onFilterApply: (filter: T) => void;
  children: React.ReactNode;
};

export { DataViewerProps, Filter, FilterConfig };
