// pages/flights.jsx
import Head from "next/head";
import React, { Suspense } from "react";
import ErrorBoundary from "../components/ErrorBoundary"; // Moved to its own file
const SearchBox = React.lazy(() => import("../components/SearchBox"));
const FlightResults = React.lazy(() => import("../components/FlightResults")); // New component
const FareCalendar = React.lazy(() => import("../components/FareCalendar")); // New component
const PriceAlertButton = React.lazy(() => import("../components/PriceAlertButton")); // New component

export default function FlightsPage() {
  return (
    <>
      <Head>
        <title>Faremee | Flights</title>
        <meta name="description" content="Book flights with Faremee. Compare cheap airline tickets worldwide. Flexible dates and advanced filters." />
        <meta name="keywords" content="flights, airline tickets, cheap flights, Faremee, travel, multi-city, price alert" />
        {/* Open Graph & Twitter Cards */}
        <meta property="og:title" content="Faremee | Flights" />
        <meta property="og:description" content="Book flights worldwide with advanced search and filters." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://faremee.com/flights" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Add analytics script if needed */}
      </Head>
      <main className="min-h-screen bg-white dark:bg-gray-900 py-6">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4" aria-label="Book Flights with Faremee">
            Book Flights with Faremee
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6" aria-label="Compare cheap airline tickets from hundreds of providers worldwide.">
            Compare cheap airline tickets from hundreds of providers worldwide. Flexible dates, multi-city, and price alerts available.
          </p>

          <ErrorBoundary>
            <Suspense fallback={<div className="text-gray-600 dark:text-gray-300" aria-busy="true">Loading search box...</div>}>
              <SearchBox
                activeTab="Flights"
                supportMultiCity={true}
                supportFlexibleDates={true}
                // Add more props for advanced filters and sorting
              />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<div className="text-gray-600 dark:text-gray-300">Loading fare calendar...</div>}>
              <FareCalendar />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<div className="text-gray-600 dark:text-gray-300">Loading flight results...</div>}>
              <FlightResults />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<div className="text-gray-600 dark:text-gray-300">Loading price alerts...</div>}>
              <PriceAlertButton />
            </Suspense>
          </ErrorBoundary>
        </div>
      </main>
    </>
  );
}
