import { CheckboxStyle } from './Checkbox/types';

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
  style?: CheckboxStyle;
};

export { CheckboxGroupMap, CheckboxGroupProps };
