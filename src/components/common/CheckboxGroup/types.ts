type CheckboxGroupMap = {
  [item: string]: {
    checked: boolean;
    label: string;
  };
};

type CheckboxGroupProps = {
  name: string;
  map: CheckboxGroupMap;
  onChange?: (map: CheckboxGroupMap) => void;
  isReadOnly?: boolean;
};

export { CheckboxGroupMap, CheckboxGroupProps };
