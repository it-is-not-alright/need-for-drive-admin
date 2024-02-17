import { FilterValues } from '~/src/components/common/DataViewer/types';
import { CarFormData } from '~/src/components/pages/CarPage/types';
import { Validatable } from '~/src/validation/types';

import { client } from '..';
import {
  ArrayRequestData,
  Endpoint,
  ObjectRequestData,
  RequestResult,
} from '../types';
import { CarMinimized, CarRaw } from './types';

function unpack(raw: CarRaw): CarFormData {
  return {
    id: raw.id,
    name: raw.name,
    number: raw.number,
    priceMin: raw.priceMin,
    priceMax: raw.priceMax,
    description: raw.description,
    tank: parseInt(raw.tank, 10),
    colors: raw.colors,
    thumbnail: raw.thumbnail,
    category: {
      id: raw.categoryId.id,
      name: raw.categoryId.name,
      label: raw.categoryId.name,
    },
  };
}

function pack(formData: Validatable<CarFormData>): CarMinimized {
  return {
    id: formData.id.value,
    name: formData.name.value,
    number: formData.number.value,
    priceMin: formData.priceMin.value,
    priceMax: formData.priceMax.value,
    description: formData.description.value,
    tank: String(formData.tank.value),
    colors: formData.colors.value,
    thumbnail: formData.thumbnail.value,
    categoryId: {
      id: formData.category.value.id,
    },
  };
}

async function getCars(
  params: string,
): Promise<RequestResult<ArrayRequestData<CarRaw>>> {
  return client.get<ArrayRequestData<CarRaw>>(Endpoint.Car, { params });
}

async function getCar(id: number): Promise<RequestResult<CarFormData>> {
  const raw = await client.get<ObjectRequestData<CarRaw>>(
    `${Endpoint.Car}/${id}`,
  );
  if (raw.error) {
    return { error: raw.error };
  }
  if (raw.content.data === null) {
    return { error: { status: 404, message: 'Автомобиль не найден' } };
  }
  return { content: unpack(raw.content.data) };
}

async function createCar(
  formData: Validatable<CarFormData>,
): Promise<RequestResult<ObjectRequestData<CarRaw>>> {
  const body = pack(formData);
  return client.post<ObjectRequestData<CarRaw>>(Endpoint.Car, { body });
}

async function updateCar(
  formData: Validatable<CarFormData>,
): Promise<RequestResult<ObjectRequestData<CarRaw>>> {
  const url = `${Endpoint.Car}/${formData.id.value}`;
  const body = pack(formData);
  return client.put<ObjectRequestData<CarRaw>>(url, { body });
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

export { createCar, getCar, getCars, getFilterValues, updateCar };
