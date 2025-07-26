// components/FilterSidebar.jsx
import { useState } from "react";

export default function FilterSidebar({ service, onFiltersChange }) {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [rating, setRating] = useState([]);
  const [amenities, setAmenities] = useState([]);

  const applyFilters = () => {
    onFiltersChange({ priceRange, rating, amenities });
  };

  return (
    <aside className="w-full lg:w-64 mb-6 lg:mb-0">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow space-y-6">
        <h3 className="text-lg font-semibold">Filters</h3>

        {/* Price Range */}
        <div>
          <label className="block mb-2">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
          <input
            type="range"
            min="0"
            max="2000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            className="w-full"
          />
        </div>

        {/* Rating */}
        {service === "hotels" && (
          <div>
            <label className="block mb-2">Star Rating</label>
            <div className="space-y-1">
              {[5, 4, 3, 2, 1].map((r) => (
                <label key={r} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={r}
                    checked={rating.includes(r)}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setRating((prev) =>
                        prev.includes(val) ? prev.filter((x) => x !== val) : [...prev, val]
                      );
                    }}
                  />
                  <span>{r} star{r > 1 ? "s" : ""}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Apply Button */}
        <button
          onClick={applyFilters}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Apply Filters
        </button>
      </div>
    </aside>
);
}
