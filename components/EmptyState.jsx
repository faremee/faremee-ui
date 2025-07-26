import React from "react";

const EmptyState = React.memo(function EmptyState({
  title = "No Results Found",
  message = "We couldn’t find any matching flights. Try adjusting your filters or search dates.",
  ariaLabel = "No Results Message",
  onRetry, // optional callback for "Try Again" button
  retryLabel = "Try Again"
}) {
  return (
    <section className="text-center py-12" aria-label={ariaLabel}>
      <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400">
        {message}
      </p>
      {onRetry && (
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onRetry}
          aria-label={retryLabel}
        >
          {retryLabel}
        </button>
      )}
    </section>
  );
});

export default EmptyState;
