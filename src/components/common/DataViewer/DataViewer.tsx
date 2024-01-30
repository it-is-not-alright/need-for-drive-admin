import './style.scss';

import React, { useState } from 'react';

import { Entity } from '~/src/api/types';

import Button from '../Button/Button';
import { ButtonType } from '../Button/types';
import { Select } from '../Select/Select';
import Pagination from './Pagination/Pagination';
import { DataViewerProps, Filter } from './types';

function DataViewer<T extends Filter>({
  page,
  pageSize,
  total,
  onPageChange,
  initFilter,
  filterConfig,
  onFilterApply,
  children,
}: DataViewerProps<T>) {
  const [filterApplied, setFilterApplied] = useState(true);
  const [filter, setFilter] = useState(initFilter);

  const handleFilterChange = (field: string, value: Entity | null) => {
    setFilter({
      ...filter,
      [field]: value,
    });
    setFilterApplied(false);
  };

  const handleFilterResetButtonClick = () => {
    setFilter(initFilter);
    setFilterApplied(false);
  };

  const handleFilterApplyButtonClick = () => {
    onFilterApply(filter);
    setFilterApplied(true);
  };

  return (
    <div className="data-grid">
      <div className="data-grid__header">
        <div className="data-grid__select-area">
          {Object.keys(filterConfig).map((key) => (
            <Select
              key={key}
              items={filterConfig[key].values}
              placeholder={filterConfig[key].placeholder}
              selectedItem={filter[key]}
              onChange={(item) => handleFilterChange(key, item)}
            />
          ))}
        </div>
        <div className="data-grid__button-area">
          <Button
            text="Сбросить"
            onClick={handleFilterResetButtonClick}
            type={ButtonType.Danger}
          />
          <Button
            text="Применить"
            onClick={handleFilterApplyButtonClick}
            isDisabled={filterApplied}
          />
        </div>
      </div>
      <div className="data-grid__main">{children}</div>
      <div className="data-grid__footer">
        <Pagination
          page={page}
          pageSize={pageSize}
          total={total}
          onChange={onPageChange}
        />
      </div>
    </div>
  );
}

export default DataViewer;
