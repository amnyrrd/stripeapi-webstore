import React, { Component } from 'react';
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './ErrorBoundary.styles';

export class ErrorBoundary extends Component {
  state = { hasErrored: false };

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/lKJiT77.png' />
          <ErrorImageText>Oops! The dog ate this page!</ErrorImageText>
        </ErrorImageOverlay>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
