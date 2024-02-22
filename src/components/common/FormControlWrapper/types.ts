type FormControlProps = {
  id: string;
  label?: string;
  error?: string;
};

type FormControlWrapperProps = FormControlProps & {
  children: React.ReactNode;
};

export { FormControlProps, FormControlWrapperProps };
