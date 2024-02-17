interface SelectItem {
  id: number;
  label: string;
}

type SelectProps<T extends SelectItem> = {
  id: string;
  items: T[];
  placeholder: string;
  selectedItem: T | null;
  onChange: (item: T) => void;
  isInvalid?: boolean;
};

export { SelectItem, SelectProps };
