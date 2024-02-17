import { FilterValues } from '~/src/components/common/DataViewer/types';

import { client } from '..';
import { ArrayRequestData, Endpoint, RequestResult } from '../types';
import { CarRaw } from './types';

async function getCars(
  params: string,
): Promise<RequestResult<ArrayRequestData<CarRaw>>> {
  return client.get<ArrayRequestData<CarRaw>>(Endpoint.Car, { params });
}

async function getFilterValues(): Promise<RequestResult<FilterValues>> {
  const raw = await client.get<ArrayRequestData<CarRaw>>(Endpoint.Car);
  if (raw.error) {
    return { error: raw.error };
  }
  const values: FilterValues = {};
  raw.content.data.forEach((car) => {
    values[car.id] = { id: car.id, label: car.name, value: String(car.id) };
  });
  return { content: values };
}

export { getCars, getFilterValues };
