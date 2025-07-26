// pages/hotels.jsx
import Head from "next/head";
import React, { Suspense } from "react";

const SearchBox = React.lazy(() => import("../components/SearchBox"));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <div className="text-red-500">Something went wrong loading the search box.</div>;
    }
    return this.props.children;
  }
}

export default function HotelsPage() {
  return (
    <>
      <Head>
        <title>Faremee | Hotels</title>
        <meta name="description" content="Book hotels with Faremee. Find great hotel deals for every budget." />
      </Head>
      <main className="min-h-screen bg-white dark:bg-gray-900 py-6">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
            Book Hotels with Faremee
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Find amazing deals on luxury and budget hotels around the world.
          </p>
          <ErrorBoundary>
            <Suspense fallback={<div className="text-gray-600 dark:text-gray-300">Loading search box...</div>}>
              <SearchBox activeTab="Hotels" />
            </Suspense>
          </ErrorBoundary>
        </div>
      </main>
    </>
  );
}
