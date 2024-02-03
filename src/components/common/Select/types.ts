import { ControlItem } from '../../types';

type SelectProps<T extends ControlItem> = {
  items: T[];
  placeholder: string;
  selectedItem: T | null;
  onChange: (item: T) => void;
};

export { SelectProps };
