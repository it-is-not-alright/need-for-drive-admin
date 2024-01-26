type TextInputProps = {
  title: string;
  value: string;
  error: string;
  onChange: (value: string) => void;
  isSecure?: boolean;
  maxLength?: number;
};

export { TextInputProps };
