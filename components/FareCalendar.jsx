// components/FareCalendar.jsx
import React from "react";

export default function FareCalendar() {
  // Placeholder for fare calendar visualization (can use charts or calendar heatmaps later)
  return (
    <section className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg shadow mb-6">
      <h2 className="text-lg font-semibold text-blue-700 dark:text-white mb-2">
        Flexible Date Fare Calendar
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        Explore the cheapest fares on nearby dates to save more.
      </p>
      {/* Replace this with real fare calendar chart in future */}
      <div className="mt-4 h-40 flex items-center justify-center text-gray-400 dark:text-gray-500 border border-dashed rounded-lg">
        [Fare Calendar Visualization Coming Soon]
      </div>
    </section>
  );
}
