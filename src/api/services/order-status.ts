import { FilterValues } from '~/src/components/common/DataViewer/types';

import { client } from '..';
import {
  ArrayRequestData,
  Endpoint,
  OrderStatusRaw,
  RequestResult,
} from '../types';

async function getFilterValues(): Promise<RequestResult<FilterValues>> {
  const raw = await client.get<ArrayRequestData<OrderStatusRaw>>(
    Endpoint.OrderStatus,
  );
  if (raw.error) {
    return { error: raw.error };
  }
  const values: FilterValues = {};
  raw.content.data.forEach((status) => {
    values[status.id] = {
      id: status.id,
      label: status.name,
      value: String(status.id),
    };
  });
  return { content: values };
}

export { getFilterValues };
