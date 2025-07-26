import Link from "next/link";
import {
  CurrencyDollarIcon,
  ClockIcon,
  TicketIcon,
  PaperAirplaneIcon // <-- Use PaperAirplaneIcon instead of AirplaneIcon
} from "@heroicons/react/24/outline";

export default function FlightCard({ flight }) {
  return (
    <Link href={`/detail/flights/${flight.id}`}>
      <a className="block bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition p-4 space-y-2">
        {/* Example icon usage */}
        <div className="flex items-center space-x-2">
          <PaperAirplaneIcon className="h-6 w-6 text-blue-600" />
          <span>{flight.airline}</span>
        </div>
        {/* …rest of your JSX… */}
      </a>
    </Link>
  );
}
