type FileDetails = {
  path: string;
  size: number;
};

type FileInputProps = {
  id: string;
  placeholder: string;
  accept: string;
  file: FileDetails | null;
  pending: boolean;
  onChange: (file: FileDetails, pending: boolean) => void;
  isInvalid?: boolean;
};

export { FileDetails, FileInputProps };
