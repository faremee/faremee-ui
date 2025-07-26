// components/FlightCard.jsx
import Link from "next/link";
import {
  AirplaneIcon,
  CurrencyDollarIcon,
  ClockIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";

export default function FlightCard({ flight }) {
  return (
    <Link href={`/detail/flights/${flight.id}`}>
      <a className="block bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition p-4 space-y-2">
        {/* …rest of your JSX… */}
      </a>
    </Link>
  );
}
