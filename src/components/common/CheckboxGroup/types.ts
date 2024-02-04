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
  isDisabled?: boolean;
};

export { CheckboxGroupMap, CheckboxGroupProps };
