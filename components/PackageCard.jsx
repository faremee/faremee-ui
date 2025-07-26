// components/PackageCard.jsx
import Link from "next/link";
import {
  CurrencyDollarIcon,
  CalendarIcon,
  MapIcon,
} from "@heroicons/react/24/outline";

export default function PackageCard({ pkg }) {
  return (
    <Link href={`/detail/vacation-packages/${pkg.id}`}>
      <a className="block bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition overflow-hidden">
        {/* …rest of your JSX… */}
      </a>
    </Link>
  );
}
