import React, { Component } from 'react';

import ErrorPage from '../pages/ErrorPage/ErrorPage';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { errorCode: '' };
  }

  componentDidCatch(error: Error): void {
    const errorCode: string = parseInt(error.message, 10)
      ? error.message
      : '???';
    this.setState({ errorCode });
  }

  private reset = (): void => {
    this.setState({ errorCode: '' });
  };

  render() {
    const { errorCode } = this.state;
    if (errorCode) {
      return (
        <main>
          <ErrorPage
            status={errorCode}
            title="Что-то пошло не так"
            message="Попробуйте перезагрузить страницу"
            reset={this.reset}
          />
        </main>
      );
    }
    const { children } = this.props;
    return children;
  }
}

export default ErrorBoundary;
