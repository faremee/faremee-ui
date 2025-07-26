// components/SkeletonLoader.jsx
import React from "react";

export default function SkeletonLoader({ count = 5 }) {
  return (
    <ul className="space-y-4 animate-pulse">
      {Array.from({ length: count }).map((_, i) => (
        <li
          key={i}
          className="bg-gray-200 dark:bg-gray-800 h-24 rounded-md"
        ></li>
      ))}
    </ul>
  );
}
