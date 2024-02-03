import { FilterValues } from '~/src/components/common/DataViewer/types';

import { client } from '..';
import { ArrayRequestData, CarRaw, Endpoint, RequestResult } from '../types';

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

export { getFilterValues };
