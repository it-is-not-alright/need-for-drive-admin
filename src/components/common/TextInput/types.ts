type TextInputProps = {
  title: string;
  isSecure?: boolean;
  value: string;
  error: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export { TextInputProps };
