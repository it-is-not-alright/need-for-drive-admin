type TextInputProps = {
  id: string;
  title: string;
  value: string;
  error: string;
  onChange: (value: string) => void;
  isSecure?: boolean;
  maxLength?: number;
  autoComplete?: string;
};

export { TextInputProps };
