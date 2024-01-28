import React, { Component } from 'react';
import { connect } from 'react-redux';

import { resetRequestError } from '~/src/redux/actions/request-error';
import { requestErrorSelector } from '~/src/redux/selectors/request-error';

import ErrorPage from '../pages/ErrorPage/ErrorPage';
import { initState } from './constants';
import {
  ErrorBoundaryDispatchProps,
  ErrorBoundaryOwnProps,
  ErrorBoundaryProps,
  ErrorBoundaryState,
  ErrorBoundaryStateProps,
} from './types';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = initState;
  }

  componentDidCatch(): void {
    this.setState({ unhandledError: true });
  }

  private reset = (): void => {
    const { reset } = this.props;
    reset();
    this.setState(initState);
  };

  render() {
    const { unhandledError } = this.state;
    const { badStatus, children } = this.props;
    const status = unhandledError ? '???' : badStatus;
    if (status !== null) {
      return (
        <ErrorPage
          status={status}
          title="Что-то пошло не так"
          message="Попробуйте перезагрузить страницу"
          reset={this.reset}
        />
      );
    }
    return children;
  }
}

export default connect<
  ErrorBoundaryStateProps,
  ErrorBoundaryDispatchProps,
  ErrorBoundaryOwnProps
>(requestErrorSelector, { reset: resetRequestError })(ErrorBoundary);
