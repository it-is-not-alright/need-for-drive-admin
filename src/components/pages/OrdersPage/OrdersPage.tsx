import React, { useState } from 'react';

import DataViewer from '../../common/DataViewer/DataViewer';
import { filterConfig, initFilter } from './constants';
import { OrderFilter } from './types';

function OrdersPage() {
  const [page, setPage] = useState(1);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleFilterApply = (filter: OrderFilter) => {
    // get request
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    // get request
  };

  return (
    <div className="page">
      <DataViewer
        page={page}
        pageSize={2}
        total={1162}
        onPageChange={handlePageChange}
        initFilter={initFilter}
        filterConfig={filterConfig}
        onFilterApply={handleFilterApply}
      >
        <p>order 1</p>
        <p>order 2</p>
      </DataViewer>
    </div>
  );
}

export default OrdersPage;
