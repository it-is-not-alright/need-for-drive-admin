type CheckboxGroupMap = {
  [item: string]: {
    checked: boolean;
    label: string;
  };
};

type CheckboxGroupProps = {
  name: string;
  map: CheckboxGroupMap;
  onChange?: (key: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
};

export { CheckboxGroupMap, CheckboxGroupProps };
