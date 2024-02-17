import './style.scss';

import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchFilterByCarValues } from '~/src/redux/car/actions';
import { fetchFilterByCityValues } from '~/src/redux/city/actions';
import { fetchOrders } from '~/src/redux/order/actions';
import {
  orderFilterConfigSelector,
  ordersSelector,
} from '~/src/redux/order/selectors';
import { fetchFilterByStatusValues } from '~/src/redux/order-status/actions';

import DataViewer from '../../common/DataViewer/DataViewer';
import Spinner from '../../common/Spinner/Spinner';
import { defaultParams, pageSize } from './constants';
import OrderRow from './OrderRow/OrderRow';

function OrdersPage() {
  const filterConfig = useSelector(orderFilterConfigSelector);
  const orders = useSelector(ordersSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilterByCarValues());
    dispatch(fetchFilterByCityValues());
    dispatch(fetchFilterByStatusValues());
  }, []);

  return (
    <div className="page">
      <h1 className="title">Заказы</h1>
      <DataViewer
        limit={pageSize}
        total={orders.content.count}
        defaultParams={defaultParams}
        fetchData={fetchOrders}
        filterConfig={filterConfig}
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
