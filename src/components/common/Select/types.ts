import { ControlItem } from '../../types';

type SelectProps<T extends ControlItem> = {
  id: string;
  items: T[];
  placeholder: string;
  selectedItem: T | null;
  onChange: (item: T) => void;
};

export { SelectProps };
