import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { client } from '~/src/api';

import DataViewer from '../../common/DataViewer/DataViewer';
import { filterConfig, initFilter } from './constants';
import { OrderFilter } from './types';

function OrdersPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page'), 10) || 1;

  const test = async () => {
    const testTime = '2023-01-15T08:27:23.611Z';
    const data = await client.get(`db/order?createdAt=${testTime}`);
    console.log(data);
  };

  useEffect(() => {
    test();
  }, []);

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
        <p>order 1</p>
        <p>order 2</p>
      </DataViewer>
    </div>
  );
}

export default OrdersPage;
