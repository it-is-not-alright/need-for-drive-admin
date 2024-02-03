import { FilterSearchParams, SearchParams } from './types';

function positiveInt(str: string, defaultValue: number) {
  return Number(str?.replace(/\D/g, '')) || defaultValue;
}

function collectParams<T extends string>(
  defaultParams: SearchParams<T>,
  urlParams: URLSearchParams,
): SearchParams<T> {
  const params: SearchParams<T> = {
    page: positiveInt(urlParams.get('page'), defaultParams.page),
    filter: { ...defaultParams.filter },
    filterIsDefault: true,
  };

  urlParams.forEach((value, name) => {
    if (
      name in defaultParams.filter &&
      value !== defaultParams.filter[name as T]
    ) {
      params.filter[name as T] = value;
      params.filterIsDefault = false;
    }
  });

  return params;
}

function paramsToURL<T extends string>(params: SearchParams<T>) {
  let url = `?page=${params.page}`;
  Object.entries(params.filter).forEach(([name, value]) => {
    if (value !== null) {
      url += `&${name}=${value}`;
    }
  });
  return url;
}

function compareFilters<T extends string>(
  filter1: FilterSearchParams<T>,
  filter2: FilterSearchParams<T>,
) {
  return Object.keys(filter1).every(
    (param: T) => filter1[param] === filter2[param],
  );
}

export { collectParams, compareFilters, paramsToURL };
