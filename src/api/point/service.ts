import { client } from '..';
import { ArrayRequestData, Endpoint, RequestResult } from '../types';
import { PointRaw } from './types';

async function getPoints(
  params: string,
): Promise<RequestResult<ArrayRequestData<PointRaw>>> {
  return client.get<ArrayRequestData<PointRaw>>(Endpoint.Point, { params });
}

export { getPoints };
