// components/HotelCard.jsx
import Link from "next/link";
import {
  StarIcon,
  BuildingOffice2Icon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

export default function HotelCard({ hotel }) {
  return (
    <Link href={`/detail/hotels/${hotel.id}`}>
      <a className="block bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition overflow-hidden">
        {/* …rest of your JSX… */}
      </a>
    </Link>
  );
}
