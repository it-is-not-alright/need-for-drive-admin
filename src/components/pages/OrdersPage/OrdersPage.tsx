import './style.scss';

import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { fetchCarFilterValues } from '~/src/redux/car/actions';
import { fetchCityFilterValues } from '~/src/redux/city/actions';
import { fetchOrders } from '~/src/redux/order/actions';
import {
  orderFilterConfigSelector,
  ordersSelector,
} from '~/src/redux/order/selectors';
import { fetchStatusFilterValues } from '~/src/redux/order-status/actions';

import DataViewer from '../../common/DataViewer/DataViewer';
import { collectParams, paramsToURL } from '../../common/DataViewer/utils';
import Spinner from '../../common/Spinner/Spinner';
import { defaultParams, pageSize } from './constants';
import OrderRow from './OrderRow/OrderRow';

function OrdersPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState(defaultParams);
  const filterConfig = useSelector(orderFilterConfigSelector);
  const orders = useSelector(ordersSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarFilterValues());
    dispatch(fetchCityFilterValues());
    dispatch(fetchStatusFilterValues());
  }, []);

  useEffect(() => {
    const newParams = collectParams(defaultParams, searchParams);
    setParams(newParams);
    dispatch(fetchOrders(`${paramsToURL(newParams)}&limit=${pageSize}`));
  }, [searchParams]);

  return (
    <div className="page">
      <h1 className="title">Заказы</h1>
      <DataViewer
        limit={pageSize}
        total={orders.content.count}
        params={params}
        defaultParams={defaultParams}
        filterConfig={filterConfig}
        setSearchParams={setSearchParams}
      >
        {orders.content.data.map((raw, index) => (
          <Fragment key={raw.id}>
            <OrderRow raw={raw} />
            {index !== orders.content.data.length - 1 && (
              <div className="spacer" />
            )}
          </Fragment>
        ))}
      </DataViewer>
      <Spinner isDisplayed={orders.pending} />
    </div>
  );
}

export default OrdersPage;
