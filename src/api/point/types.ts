import { CityRaw } from '../city/types';

type PointRaw = {
  id: number;
  name: string;
  address: string;
  cityId: CityRaw;
};

export { PointRaw };
