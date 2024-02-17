import { CategoryRaw } from '../category/types';

type Thumbnail = {
  path: string;
  size: number;
};

type CarRaw = {
  id: number;
  name: string;
  number: string;
  priceMax: number;
  priceMin: number;
  description: string;
  tank: string;
  colors: string[];
  thumbnail: Thumbnail;
  categoryId: CategoryRaw;
};

export { CarRaw, Thumbnail };
