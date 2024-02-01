import { RequestError } from '~/src/api/types';

type ErrorBoundaryOwnProps = {
  children: React.ReactNode;
};

type ErrorBoundaryDispatchProps = {
  reset: () => void;
};

type ErrorBoundaryStateProps = RequestError;

type ErrorBoundaryProps = ErrorBoundaryOwnProps &
  ErrorBoundaryDispatchProps &
  ErrorBoundaryStateProps;

type ErrorBoundaryState = {
  unhandledError: boolean;
};

export {
  ErrorBoundaryDispatchProps,
  ErrorBoundaryOwnProps,
  ErrorBoundaryProps,
  ErrorBoundaryState,
  ErrorBoundaryStateProps,
};
