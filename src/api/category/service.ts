import { client } from '..';
import { ArrayRequestData, Endpoint, RequestResult } from '../types';
import { CategoryRaw, CategorySelectItem } from './types';

async function getCategories(): Promise<
  RequestResult<ArrayRequestData<CategorySelectItem>>
> {
  const raw = await client.get<ArrayRequestData<CategoryRaw>>(
    Endpoint.Category,
  );
  if (raw.error) {
    return { error: raw.error };
  }
  const categories = raw.content.data.map((category) => ({
    ...category,
    label: category.name,
  }));
  return {
    content: { ...raw.content, data: categories },
  };
}

export { getCategories };
