// components/CarCard.jsx
import Link from "next/link";
import { CarIcon, CurrencyDollarIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function CarCard({
  car = {
    id: 1,
    make: "Toyota",
    model: "Camry",
    seats: 5,
    pricePerDay: 45,
    image: "/cars/toyota-camry.jpg",
    type: "Sedan",
  },
}) {
  return (
    <Link href={`/detail/car-rentals/${car.id}`}>
      <a className="block bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition overflow-hidden">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="h-40 w-full object-cover"
        />
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold">{`${car.make} ${car.model}`}</h3>
          <div className="flex items-center text-sm text-gray-500">
            <CarIcon className="w-5 h-5 mr-1" />
            <span>{car.type}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <ClockIcon className="w-5 h-5 mr-1" />
            <span>{`${car.seats} seats`}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">per day</div>
            <div className="flex items-center space-x-1">
              <CurrencyDollarIcon className="w-5 h-5 text-green-600" />
              <span className="font-bold">${car.pricePerDay}</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
