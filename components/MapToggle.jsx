// components/MapToggle.jsx
import { MapPinIcon } from "@heroicons/react/24/outline";

export default function MapToggle({ showingMap, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center space-x-1 p-2 border rounded-lg bg-white dark:bg-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <MapPinIcon className="w-5 h-5" />
      <span>{showingMap ? "Hide Map" : "Show Map"}</span>
    </button>
  );
}
