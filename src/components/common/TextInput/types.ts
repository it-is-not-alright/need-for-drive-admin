type TextInputProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  isSecure?: boolean;
  isInvalid?: boolean;
  maxLength?: number;
  autoComplete?: string;
};

export { TextInputProps };
