type StringArrayEditorProps = {
  id: string;
  array: string[];
  onChange: (array: string[]) => void;
  label?: string;
  error?: string | null;
};

export { StringArrayEditorProps };
