enum CheckboxStyle {
  Green = 'checkbox-green',
  Blue = 'checkbox-blue',
}

type CheckboxProps = {
  id: string;
  name: string;
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
  style: CheckboxStyle;
};

export { CheckboxProps, CheckboxStyle };
