import './style.scss';

import React from 'react';

import { PaginationItem } from './PaginationItem/PaginationItem';
import { PaginationProps } from './types';

function Pagination({
  page,
  pageSize,
  total,
  onChange,
  offset = 0,
}: PaginationProps) {
  const lastPage = Math.ceil(total / pageSize);
  const offsettedPage = page + offset;

  const handleChange = (newPage: number) => {
    onChange(newPage - offset);
  };

  return (
    <div className="pagination">
      <PaginationItem
        value="«"
        onClick={() => handleChange(offsettedPage - 1)}
        isDisplayed={offsettedPage !== 1}
      />
      <PaginationItem
        value="1"
        onClick={() => handleChange(1)}
        isDisplayed={offsettedPage > 2}
      />
      {offsettedPage > 3 && <span>...</span>}
      <PaginationItem
        value={offsettedPage - 1}
        onClick={() => handleChange(offsettedPage - 1)}
        isDisplayed={offsettedPage > 1}
      />
      <PaginationItem value={offsettedPage} isActive />
      <PaginationItem
        value={offsettedPage + 1}
        onClick={() => handleChange(offsettedPage + 1)}
        isDisplayed={lastPage > offsettedPage}
      />
      {lastPage - offsettedPage > 2 && <span>...</span>}
      <PaginationItem
        value={lastPage}
        onClick={() => handleChange(lastPage)}
        isDisplayed={lastPage - offsettedPage > 1}
      />
      <PaginationItem
        value="»"
        onClick={() => handleChange(offsettedPage + 1)}
        isDisplayed={lastPage > offsettedPage}
      />
    </div>
  );
}

export default Pagination;
