import React from 'react';
import { useSearchParams } from 'react-router-dom';

import DataViewer from '../../common/DataViewer/DataViewer';
import { filterConfig, initFilter, orders } from './constants';
import OrderRow from './OrderRow/OrderRow';
import { OrderFilter } from './types';

function OrdersPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page'), 10) || 1;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleFilterApply = (filter: OrderFilter) => {
    // get request
  };

  const handlePageChange = (newPage: number) => {
    setSearchParams({ ...searchParams, page: String(newPage) });
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
        {orders.map((raw) => (
          <OrderRow raw={raw} key={raw.id} />
        ))}
      </DataViewer>
    </div>
  );
}

export default OrdersPage;
