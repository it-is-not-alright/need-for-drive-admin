import { SelectItem } from '~/src/components/common/Select/types';

type CategoryRaw = {
  id: number;
  name: string;
};

interface CategorySelectItem extends CategoryRaw, SelectItem {}

export { CategoryRaw, CategorySelectItem };
