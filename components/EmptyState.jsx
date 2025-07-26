// components/EmptyState.jsx
import React from "react";

export default function EmptyState() {
  return (
    <div className="text-center py-12">
      <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
        No Results Found
      </h3>
      <p className="text-gray-500 dark:text-gray-400">
        We couldn’t find any matching flights. Try adjusting your filters or search dates.
      </p>
    </div>
  );
}
