// components/SortControl.jsx
export default function SortControl({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 border rounded-lg bg-white dark:bg-gray-800 dark:text-white"
    >
      <option value="best">Best Match</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="star-desc">Star Rating</option>
    </select>
  );
}
