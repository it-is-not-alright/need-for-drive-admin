import { Thumbnail } from '~/src/api/car/types';
import { CategorySelectItem } from '~/src/api/category/types';

type CarCardProps = {
  percentage: number;
  name: string;
  description: string;
  thumbnail: Thumbnail | null;
  category: CategorySelectItem | null;
  handleInput: (key: string, value: unknown) => void;
};

export { CarCardProps };
