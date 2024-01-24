type TextInputProps = {
  title: string;
  value: string;
  error: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isSecure?: boolean;
  maxLength?: number;
};

export { TextInputProps };
