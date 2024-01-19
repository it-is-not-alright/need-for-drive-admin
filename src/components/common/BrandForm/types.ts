type BrandFormProps = {
  title: string;
  children: React.ReactNode;
  linkLabel: string;
  linkHref: string;
  buttonLabel: string;
  onSubmit: () => void;
  pending: boolean;
};

export { BrandFormProps };
