// components/CarCard.jsx
import Link from "next/link";
import {
  CarIcon,
  CurrencyDollarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function CarCard({ car }) {
  return (
    <Link href={`/detail/car-rentals/${car.id}`}>
      <a className="block bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition overflow-hidden">
        {/* …rest of your JSX… */}
      </a>
    </Link>
  );
}
