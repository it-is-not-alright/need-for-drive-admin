import React, { Component } from 'react';

import ErrorPage from '../pages/ErrorPage/ErrorPage';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { errorMessage: '' };
  }

  componentDidCatch(error: Error): void {
    const errorMessage: string = error.message;
    this.setState({ errorMessage });
  }

  private reset = (): void => {
    this.setState({ errorMessage: '' });
  };

  render() {
    const { errorMessage } = this.state;
    if (errorMessage) {
      return (
        <ErrorPage
          code="???"
          title="Что-то пошло не так"
          message={errorMessage}
          reset={this.reset}
        />
      );
    }
    const { children } = this.props;
    return children;
  }
}

export default ErrorBoundary;
