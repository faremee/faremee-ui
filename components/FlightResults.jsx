import React, { useState, useEffect } from 'react';
import FlightResultItem from './FlightResultItem';
import SkeletonLoader from './SkeletonLoader'; // loading skeleton
import { fetchFlights } from '../utils/api'; // API abstraction

export default function FlightResults({ origin, destination, date }) {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination, sorting, filtering states here

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchFlights({ origin, destination, date }) // uses env variable for API
      .then(setFlights)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [origin, destination, date]);

  if (loading) return <SkeletonLoader />;
  if (error) return <ErrorComponent message={error} onRetry={/* retry logic */} />;
  if (flights.length === 0) return <EmptyState />;

  return (
    <section>
      {/* Sorting, Filtering, Currency, Language controls */}
      <ul>
        {flights.map(flight => (
          <FlightResultItem key={flight.id || flight.flightNumber} flight={flight} />
        ))}
      </ul>
      {/* Pagination controls */}
    </section>
  );
}
