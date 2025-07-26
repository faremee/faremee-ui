// components/PriceAlertButton.jsx
import React, { useState } from "react";

export default function PriceAlertButton({ origin, destination, date }) {
  const [enabled, setEnabled] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Example: send data to backend or 3rd-party service
    fetch("/api/price-alert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ origin, destination, date, email }),
    }).catch(() => {});
  };

  return (
    <div className="mt-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        Set Price Alert
      </h3>

      {submitted ? (
        <p className="text-green-600 dark:text-green-400">
          You’ll be notified when prices change!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border rounded-md dark:bg-gray-900 dark:text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Alert Me
          </button>
        </form>
      )}
    </div>
  );
}
