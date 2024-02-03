import './style.scss';

import React, { useEffect, useState } from 'react';

import Button from '../Button/Button';
import { ButtonType } from '../Button/types';
import { Select } from '../Select/Select';
import Pagination from './Pagination/Pagination';
import { DataViewerProps, FilterValueControlItem } from './types';
import { compareFilters, paramsToURL } from './utils';

function DataViewer<T extends string>({
  total,
  params,
  defaultParams,
  filterConfig,
  setSearchParams,
  children,
}: DataViewerProps<T>) {
  const [filter, setFilter] = useState(params.filter);

  useEffect(() => {
    setFilter(params.filter);
  }, [params]);

  const handleFilterChange = (
    param: T,
    item: FilterValueControlItem | null,
  ) => {
    setFilter({ ...filter, [param]: item.value });
  };

  const handleFilterResetButtonClick = () => {
    setSearchParams(paramsToURL({ ...defaultParams, page: params.page }));
  };

  const handleFilterApplyButtonClick = () => {
    setSearchParams(paramsToURL({ ...params, filter, page: 1 }));
  };

  const handlePageChange = (page: number) => {
    setSearchParams(paramsToURL({ ...params, page }));
  };

  return (
    <div className="data-grid">
      <div className="data-grid__header">
        <div className="data-grid__select-area">
          {Object.keys(filterConfig).map((param: T) => (
            <Select
              key={param}
              items={Object.values(filterConfig[param].values)}
              placeholder={filterConfig[param].placeholder}
              selectedItem={filterConfig[param].values[filter[param]] || null}
              onChange={(item) => handleFilterChange(param, item)}
            />
          ))}
        </div>
        <div className="data-grid__button-area">
          <Button
            text="Сбросить"
            onClick={handleFilterResetButtonClick}
            type={ButtonType.Danger}
            isDisabled={params.filterIsDefault}
          />
          <Button
            text="Применить"
            onClick={handleFilterApplyButtonClick}
            isDisabled={compareFilters(filter, params.filter)}
          />
        </div>
      </div>
      <div className="data-grid__main">{children}</div>
      <div className="data-grid__footer">
        <Pagination
          page={params.page}
          pageSize={10}
          total={total}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default DataViewer;
