import { client } from '..';
import { ArrayRequestData, Endpoint, RequestResult } from '../types';
import { OrderRaw } from './types';

async function getOrders(
  params: string,
): Promise<RequestResult<ArrayRequestData<OrderRaw>>> {
  return client.get<ArrayRequestData<OrderRaw>>(Endpoint.Order, { params });
}

export { getOrders };
