type ErrorPageProps = {
  status: number | string;
  message: string;
  tip: string;
  reset?: () => void;
};

export { ErrorPageProps };
