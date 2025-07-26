// components/FlightCard.jsx
import Link from "next/link";
import { AirplaneIcon, CurrencyDollarIcon, ClockIcon, TicketIcon } from "@heroicons/react/24/outline";

export default function FlightCard({
  flight = {
    id: 1,
    airline: "Example Air",
    flightNumber: "EA123",
    departTime: "08:00",
    arriveTime: "12:00",
    duration: "4h",
    from: "JFK",
    to: "LAX",
    price: 299,
    refundable: true,
  },
}) {
  return (
    <Link href={`/detail/flights/${flight.id}`}>
      <a className="block bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition p-4 space-y-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <AirplaneIcon className="w-6 h-6 text-blue-600" />
            <span className="font-semibold">{flight.airline}</span>
            <span className="text-sm text-gray-500">{flight.flightNumber}</span>
          </div>
          <div className="flex items-center space-x-1">
            <CurrencyDollarIcon className="w-5 h-5 text-green-600" />
            <span className="font-bold text-lg">${flight.price}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <span className="font-medium">{flight.departTime}</span>
            <span className="text-sm text-gray-500">{flight.from}</span>
          </div>
          <div className="text-sm text-gray-400">→</div>
          <div className="flex items-center space-x-1">
            <span className="font-medium">{flight.arriveTime}</span>
            <span className="text-sm text-gray-500">{flight.to}</span>
          </div>
        </div>

        <div className="flex justify-between text-sm text-gray-500">
          <span>
            <ClockIcon className="w-4 h-4 inline-block mr-1" />
            {flight.duration}
          </span>
          {flight.refundable && (
            <span className="flex items-center text-green-500">
              <TicketIcon className="w-4 h-4 mr-1" />
              Refundable
            </span>
          )}
        </div>
      </a>
    </Link>
  );
}
