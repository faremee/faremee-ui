import Link from "next/link";
import {
  CurrencyDollarIcon,
  ClockIcon,
  TruckIcon // <-- Use TruckIcon as a car alternative from heroicons
} from "@heroicons/react/24/outline";

export default function CarCard({ car }) {
  return (
    <Link href={`/detail/car-rentals/${car.id}`}>
      <a className="block bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition overflow-hidden">
        {/* Example icon usage */}
        <div className="p-4 flex items-center space-x-2">
          <TruckIcon className="h-6 w-6 text-blue-600" />
          <span>{car.model}</span>
        </div>
        {/* …rest of your JSX… */}
      </a>
    </Link>
  );
}
