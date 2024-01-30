import './style.scss';

import React from 'react';

import { PaginationItem } from './PaginationItem/PaginationItem';
import { PaginationProps } from './types';

function Pagination({ page, pageSize, total, onChange }: PaginationProps) {
  const lastPage = Math.ceil(total / pageSize);

  return (
    <div className="pagination">
      <PaginationItem
        value="«"
        onClick={() => onChange(page - 1)}
        isDisplayed={page !== 1}
      />
      <PaginationItem
        value="1"
        onClick={() => onChange(1)}
        isDisplayed={page > 2}
      />
      {page > 3 && <span>...</span>}
      <PaginationItem
        value={page - 1}
        onClick={() => onChange(page - 1)}
        isDisplayed={page > 1}
      />
      <PaginationItem value={page} isActive />
      <PaginationItem
        value={page + 1}
        onClick={() => onChange(page + 1)}
        isDisplayed={lastPage > page}
      />
      {lastPage - page > 2 && <span>...</span>}
      <PaginationItem
        value={lastPage}
        onClick={() => onChange(lastPage)}
        isDisplayed={lastPage - page > 1}
      />
      <PaginationItem
        value="»"
        onClick={() => onChange(page + 1)}
        isDisplayed={lastPage > page}
      />
    </div>
  );
}

export default Pagination;
