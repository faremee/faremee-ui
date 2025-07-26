// components/FlightResultItem.jsx
import React from "react";
import PropTypes from "prop-types";

// Memoize for performance if used in lists
const FlightResultItem = React.memo(function FlightResultItem({ flight, onSelect, loading }) {
  if (!flight) return null;

  return (
    <li className="bg-white dark:bg-gray-900 shadow rounded-lg mb-4 p-4 flex flex-col sm:flex-row sm:justify-between">
      <div className="flex-1">
        <h4 className="text-lg font-semibold text-blue-700 dark:text-white">
          {flight.airline} - {flight.flightNumber}
        </h4>
        <p className="text-gray-700 dark:text-gray-300">
          {flight.origin} &rarr; {flight.destination}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Departure: {flight.departureTime} | Arrival: {flight.arrivalTime}
        </p>
        <p className="text-sm text-green-600 dark:text-green-400">
          {flight.isRefundable ? "Refundable" : "Non-refundable"}
        </p>
      </div>
      <div className="mt-4 sm:mt-0 sm:text-right">
        <p className="text-xl font-bold text-blue-600">${flight.price}</p>
        <button
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          aria-label={`Select flight ${flight.airline} ${flight.flightNumber}`}
          onClick={onSelect}
          disabled={loading}
        >
          {loading ? "Selecting..." : "Select"}
        </button>
      </div>
    </li>
  );
});

FlightResultItem.propTypes = {
  flight: PropTypes.shape({
    airline: PropTypes.string.isRequired,
    flightNumber: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    departureTime: PropTypes.string.isRequired,
    arrivalTime: PropTypes.string.isRequired,
    isRefundable: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onSelect: PropTypes.func,
  loading: PropTypes.bool,
};

FlightResultItem.defaultProps = {
  onSelect: () => {},
  loading: false,
};

export default FlightResultItem;
