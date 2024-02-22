import React, { Component } from 'react';
import { connect } from 'react-redux';

import { resetRequestError } from '~/src/redux/request-error/actions';
import { requestErrorSelector } from '~/src/redux/request-error/selectors';

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
    const { reset } = this.props;
    reset();
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
    const { status, message, children } = this.props;
    if (unhandledError || message) {
      return (
        <ErrorPage
          status={message ? status : '???'}
          message={message ?? 'Что-то пошло не так'}
          tip="Попробуйте перезагрузить страницу"
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
