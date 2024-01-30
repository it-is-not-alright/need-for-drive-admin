import { Entity } from '~/src/api/types';

type SelectProps = {
  items: Entity[];
  placeholder: string;
  selectedItem: Entity | null;
  onChange: (item: Entity) => void;
};

export { SelectProps };
