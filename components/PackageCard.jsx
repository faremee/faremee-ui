// components/PackageCard.jsx
import Link from "next/link";
import { CurrencyDollarIcon, CalendarIcon, MapIcon } from "@heroicons/react/24/outline";

export default function PackageCard({
  pkg = {
    id: 1,
    title: "7-Day Europe Tour",
    price: 1200,
    duration: "7 days",
    image: "/packages/europe.jpg",
    highlights: ["Paris", "Rome", "Barcelona"],
  },
}) {
  return (
    <Link href={`/detail/vacation-packages/${pkg.id}`}>
      <a className="block bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="h-40 w-full object-cover"
        />
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold">{pkg.title}</h3>
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span className="flex items-center">
              <CalendarIcon className="w-5 h-5 mr-1" />
              {pkg.duration}
            </span>
            <span className="flex items-center">
              <MapIcon className="w-5 h-5 mr-1" />
              {pkg.highlights.join(", ")}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">starting from</div>
            <div className="flex items-center space-x-1">
              <CurrencyDollarIcon className="w-5 h-5 text-green-600" />
              <span className="font-bold">${pkg.price}</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
