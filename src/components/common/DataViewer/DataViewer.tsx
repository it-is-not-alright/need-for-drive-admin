import './style.scss';

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import Button from '../Button/Button';
import { ButtonStyle } from '../Button/types';
import Select from '../Select/Select';
import Pagination from './Pagination/Pagination';
import { DataViewerProps, FilterValueControlItem } from './types';
import { collectParams, compareFilters, paramsToURL } from './utils';

function DataViewer<T extends string>({
  limit,
  total,
  defaultParams,
  filterConfig,
  fetchData,
  children,
}: DataViewerProps<T>) {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = collectParams(defaultParams, searchParams);
  const [filter, setFilter] = useState(params.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    setFilter(params.filter);
    dispatch(fetchData(`${paramsToURL(params)}&limit=${limit}`));
  }, [searchParams]);

  const handleFilterChange = (
    param: T,
    item: FilterValueControlItem | null,
  ) => {
    setFilter({ ...filter, [param]: item?.value ?? null });
  };

  const handleFilterResetButtonClick = () => {
    setSearchParams(paramsToURL(defaultParams));
  };

  const handleFilterApplyButtonClick = () => {
    setSearchParams(
      paramsToURL({ ...params, filter, page: defaultParams.page }),
    );
  };

  const handlePageChange = (page: number) => {
    setSearchParams(paramsToURL({ ...params, page }));
  };

  return (
    <div className="data-viewer">
      {filterConfig && (
        <div className="data-viewer__header">
          <div className="data-viewer__select-area">
            {Object.keys(filterConfig).map((param: T) => (
              <Select
                key={param}
                id={param}
                items={Object.values(filterConfig[param].values)}
                placeholder={filterConfig[param].placeholder}
                selectedItem={filterConfig[param].values[filter[param]] || null}
                onChange={(item) => handleFilterChange(param, item)}
              />
            ))}
          </div>
          <div className="data-viewer__button-area">
            <Button
              text="Сбросить"
              onClick={handleFilterResetButtonClick}
              style={ButtonStyle.Danger}
              isDisabled={params.filterIsDefault}
            />
            <Button
              text="Применить"
              onClick={handleFilterApplyButtonClick}
              isDisabled={compareFilters(filter, params.filter)}
            />
          </div>
        </div>
      )}
      <div className="data-viewer__main">
        {total > 0 ? (
          children
        ) : (
          <p className="data-viewer__placeholder">Результаты не найдены</p>
        )}
      </div>
      {total > 0 && (
        <div className="data-viewer__footer">
          <Pagination
            page={params.page}
            pageSize={limit}
            total={total}
            onChange={handlePageChange}
            offset={1}
          />
        </div>
      )}
    </div>
  );
}

export default DataViewer;
