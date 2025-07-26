// pages/flights.jsx
import Head from "next/head";
import React, { Suspense } from "react";

// Lazy load SearchBox
const SearchBox = React.lazy(() => import("../components/SearchBox"));

// Simple Error Boundary implementation
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // You can log error info to an external service here
  }
  render() {
    if (this.state.hasError) {
      return <div className="text-red-500" aria-live="polite">Something went wrong loading the search box.</div>;
    }
    return this.props.children;
  }
}

export default function FlightsPage() {
  return (
    <>
      <Head>
        <title>Faremee | Flights</title>
        <meta name="description" content="Book flights with Faremee. Compare cheap airline tickets worldwide." />
        <meta name="keywords" content="flights, airline tickets, cheap flights, Faremee, travel" />
        {/* Add analytics script if needed */}
      </Head>
      <main className="min-h-screen bg-white dark:bg-gray-900 py-6">
        <div className="max-w-4xl mx-auto px-4">
          <h1
            className="text-3xl font-semibold text-gray-800 dark:text-white mb-4"
            aria-label="Book Flights with Faremee"
          >
            Book Flights with Faremee
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6" aria-label="Compare cheap airline tickets from hundreds of providers worldwide.">
            Compare cheap airline tickets from hundreds of providers worldwide.
          </p>
          <ErrorBoundary>
            <Suspense fallback={<div className="text-gray-600 dark:text-gray-300" aria-busy="true">Loading search box...</div>}>
              <SearchBox activeTab="Flights" />
            </Suspense>
          </ErrorBoundary>
        </div>
      </main>
    </>
  );
}
