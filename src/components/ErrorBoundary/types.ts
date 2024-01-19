type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  errorCode: string;
};

export { ErrorBoundaryProps, ErrorBoundaryState };
