// components/Pagination.jsx
export default function Pagination({ page, totalPages, onPageChange }) {
  const prev = () => onPageChange(Math.max(1, page - 1));
  const next = () => onPageChange(Math.min(totalPages, page + 1));

  return (
    <div className="flex justify-center items-center space-x-4 mt-6">
      <button
        onClick={prev}
        disabled={page === 1}
        className="px-3 py-1 border rounded-lg bg-white dark:bg-gray-800 disabled:opacity-50"
      >
        Previous
      </button>
      <span>
        Page {page} of {totalPages}
      </span>
      <button
        onClick={next}
        disabled={page === totalPages}
        className="px-3 py-1 border rounded-lg bg-white dark:bg-gray-800 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
