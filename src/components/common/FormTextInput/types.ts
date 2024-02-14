import { FormControlProps } from '../FormControlWrapper/types';

type FormTextInputProps = {
  value: string;
  onChange: (value: string) => void;
  isSecure?: boolean;
  maxLength?: number;
  autoComplete?: string;
} & FormControlProps;

export { FormTextInputProps };
