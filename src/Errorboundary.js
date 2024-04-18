import React from "react";
// import { useErrorBoundary } from " react-error-boundary";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, erroInfo) {
    console.log(error, erroInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
