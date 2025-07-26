// components/ErrorBoundary.jsx
import React from "react";
import PropTypes from "prop-types";
// Uncomment and configure if using Sentry or another error service:
// import * as Sentry from "@sentry/react";

/**
 * ErrorBoundary: Catches JavaScript errors in child components and displays a fallback UI.
 * Features:
 * - Customizable fallback UI via props
 * - Error logging (console, Sentry-ready)
 * - Reset error state when children change (OTA/code updates)
 * - User-friendly reload/retry option
 * - Accessibility improvements
 * - PropTypes validation
 */

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console and optionally to external services
    console.error("Error caught in boundary:", error, errorInfo);
    // if (process.env.NODE_ENV === "production") {
    //   Sentry.captureException(error, { extra: errorInfo });
    // }
  }

  componentDidUpdate(prevProps) {
    // Reset error state if children change (OTA/code update support)
    if (prevProps.children !== this.props.children && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div role="alert" className="text-red-500">
            <p>Something went wrong while loading this section.</p>
            <button
              onClick={this.handleReload}
              className="btn btn-retry"
              style={{ marginTop: "1rem" }}
            >
              Reload
            </button>
          </div>
        )
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node,
};
