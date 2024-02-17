type NumberInputProps = {
  id: string;
  unit: string;
  value: number;
  onChange: (value: number | null) => void;
  max?: number;
};

export { NumberInputProps };
