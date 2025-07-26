import React, { useState } from "react";
import PropTypes from "prop-types";

export default function PriceAlertButton({ origin, destination, date, userEmail }) {
  const [email, setEmail] = useState(userEmail || "");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/price-alert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ origin, destination, date, email }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      setSuccess(`You'll be notified at ${email} when prices change!`);
    } catch (err) {
      setError("Failed to set alert. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow" aria-live="polite">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        Set Price Alert
      </h3>
      {error && <p className="text-red-600 dark:text-red-400 mb-2">{error}</p>}
      {success && <p className="text-green-600 dark:text-green-400 mb-2">{success}</p>}
      {!submitted && (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2" aria-label="Price Alert Form">
          <input
            type="email"
            required
            placeholder="Enter your email"
            aria-label="Email address"
            className="flex-1 px-4 py-2 border rounded-md dark:bg-gray-900 dark:text-white"
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className={`bg-blue-600 text-white px-6 py-2 rounded-md font-semibold ${loading ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-700"}`}
            aria-label="Submit email for price alert"
          >
            {loading ? "Submitting..." : "Alert Me"}
          </button>
        </form>
      )}
    </div>
  );
}

PriceAlertButton.propTypes = {
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  userEmail: PropTypes.string,
};
