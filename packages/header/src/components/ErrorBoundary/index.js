import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("CAUGHT ERROR", error, errorInfo);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <>Error caught here</>;
    }

    return <>{children}</>;
  }
}
