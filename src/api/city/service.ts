import { FilterValues } from '~/src/components/common/DataViewer/types';

import { client } from '..';
import { ArrayRequestData, Endpoint, RequestResult } from '../types';
import { CityRaw } from './types';

async function getFilterValues(): Promise<RequestResult<FilterValues>> {
  const raw = await client.get<ArrayRequestData<CityRaw>>(Endpoint.City);
  if (raw.error) {
    return { error: raw.error };
  }
  const values: FilterValues = {};
  raw.content.data.forEach((city) => {
    values[city.id] = { id: city.id, label: city.name, value: String(city.id) };
  });
  return { content: values };
}

export { getFilterValues };
