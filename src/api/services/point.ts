import { client } from '..';
import { ArrayRequestData, Endpoint, PointRaw, RequestResult } from '../types';

async function getPoints(
  params: string,
): Promise<RequestResult<ArrayRequestData<PointRaw>>> {
  return client.get<ArrayRequestData<PointRaw>>(Endpoint.Point, { params });
}

export { getPoints };
