import { Thumbnail } from '~/src/api/car/types';
import { CategorySelectItem } from '~/src/api/category/types';
import { Scheme } from '~/src/validation/types';

type CarPageParams = {
  id?: string;
};

type CarFormData = {
  id: number | null;
  name: string;
  number: string;
  priceMin: number | null;
  priceMax: number | null;
  description: string;
  tank: number | null;
  colors: string[];
  thumbnail: Thumbnail | null;
  categoryId: CategorySelectItem | null;
};

type CarFormDataScheme = Scheme<CarFormData>;

export { CarFormData, CarFormDataScheme, CarPageParams };
