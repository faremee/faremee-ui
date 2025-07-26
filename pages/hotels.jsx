// pages/hotels.jsx
import Head from "next/head";
import React, { Suspense } from "react";

const SearchBox = React.lazy(() => import("../components/SearchBox"));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    // Log error for debugging
    console.error("Error in SearchBox:", error);
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="text-red-500" role="alert">
          Something went wrong loading the search box.
        </div>
      );
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
        <meta name="keywords" content="hotels, booking, travel, deals, luxury, budget" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Faremee | Hotels" />
        <meta property="og:description" content="Book hotels with Faremee. Find great hotel deals for every budget." />
        {/* Example image url, replace with actual if available */}
        <meta property="og:image" content="https://faremee.com/assets/hotels-og-image.jpg" />
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
            <Suspense
              fallback={
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="animate-spin h-5 w-5 mr-2 text-blue-500" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Loading search box...
                </div>
              }
            >
              <SearchBox activeTab="Hotels" aria-label="Hotel search box" />
            </Suspense>
          </ErrorBoundary>
        </div>
      </main>
    </>
  );
}
