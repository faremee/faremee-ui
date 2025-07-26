// components/FlightResults.jsx
import React, { useState, useEffect } from "react";

export default function FlightResults() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch results from backend (test or real API)
    fetch("/api/flights?origin=YYZ&destination=JFK&date=2025-08-10")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch flights");
        return res.json();
      })
      .then((data) => setFlights(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-gray-500 dark:text-gray-300">Loading flight results...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Flight Results
      </h2>
      {flights.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">No flights found for your search.</p>
      ) : (
        <ul className="space-y-4">
          {flights.map((flight, idx) => (
            <li key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">
                    {flight.airline} • {flight.flightNumber}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {flight.origin} → {flight.destination}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-blue-600 text-lg">${flight.price}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{flight.duration}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
