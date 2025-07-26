// pages/flights.jsx
import Head from "next/head";
import SearchBox from "../components/SearchBox";

export default function FlightsPage() {
  return (
    <>
      <Head>
        <title>Faremee | Flights</title>
      </Head>
      <main className="min-h-screen bg-white dark:bg-gray-900 py-6">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
            Book Flights with Faremee
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Compare cheap airline tickets from hundreds of providers worldwide.
          </p>
          <SearchBox activeTab="Flights" />
        </div>
      </main>
    </>
  );
}
