import React, { useState, useEffect } from "react";
import CalendarGrid from "./CalendarGrid";
import FareFilters from "./FareFilters";
import FareLoader from "./FareLoader";
import FareError from "./FareError";

export default function FareCalendar() {
  const [fares, setFares] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ origin: "", destination: "", dateRange: "" });

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Example API call
    fetch(`/api/fares?origin=${filters.origin}&destination=${filters.destination}&dateRange=${filters.dateRange}`)
      .then((res) => res.json())
      .then(setFares)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [filters]);

  return (
    <section className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg shadow mb-6">
      <h2 className="text-lg font-semibold text-blue-700 dark:text-white mb-2">
        Flexible Date Fare Calendar
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        Explore the cheapest fares on nearby dates to save more.
      </p>
      <FareFilters filters={filters} onChange={setFilters} />
      {loading ? (
        <FareLoader />
      ) : error ? (
        <FareError error={error} />
      ) : (
        <CalendarGrid fares={fares} />
      )}
    </section>
  );
}
