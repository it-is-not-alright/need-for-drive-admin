import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { fetchCarFilterValues } from '~/src/redux/car/actions';
import { carFilterValuesSelector } from '~/src/redux/car/selectors';
import { fetchCityFilterValues } from '~/src/redux/city/actions';
import { cityFilterValuesSelector } from '~/src/redux/city/selectors';
import { fetchOrders } from '~/src/redux/order/actions';
import { ordersSelector } from '~/src/redux/order/selectors';
import { fetchStatusFilterValues } from '~/src/redux/order-status/actions';
import { statusFilterValuesSelector } from '~/src/redux/order-status/selectors';

import DataViewer from '../../common/DataViewer/DataViewer';
import { collectParams, paramsToURL } from '../../common/DataViewer/utils';
import { defaultParams } from './constants';
import OrderRow from './OrderRow/OrderRow';
import { OrderFilterConfig } from './types';

function OrdersPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState(defaultParams);
  const carFilterValues = useSelector(carFilterValuesSelector);
  const cityFilterValues = useSelector(cityFilterValuesSelector);
  const statusFilterValues = useSelector(statusFilterValuesSelector);
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
    dispatch(fetchOrders(`${paramsToURL(newParams)}&limit=${5}`));
  }, [searchParams]);

  const filterConfig: OrderFilterConfig = useMemo(() => {
    return {
      cityId: {
        placeholder: 'Город',
        values: cityFilterValues.data,
      },
      carId: {
        placeholder: 'Модель',
        values: carFilterValues.data,
      },
      orderStatusId: {
        placeholder: 'Статус',
        values: statusFilterValues.data,
      },
    };
  }, [carFilterValues, cityFilterValues, statusFilterValues]);

  return (
    <div className="page">
      <h1>Заказы</h1>
      <DataViewer
        total={orders.data.count}
        params={params}
        defaultParams={defaultParams}
        filterConfig={filterConfig}
        setSearchParams={setSearchParams}
      >
        {orders.data.data.map((raw) => (
          <OrderRow raw={raw} key={raw.id} />
        ))}
      </DataViewer>
    </div>
  );
}

export default OrdersPage;
