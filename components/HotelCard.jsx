// components/HotelCard.jsx
import Link from "next/link";
import { StarIcon, BuildingOffice2Icon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

export default function HotelCard({
  hotel = {
    id: 1,
    name: "Grand Resort",
    rating: 4,
    location: "Downtown",
    price: 150,
    image: "/hotels/grand-resort.jpg",
    amenities: ["WiFi", "Pool", "Gym"],
  },
}) {
  return (
    <Link href={`/detail/hotels/${hotel.id}`}>
      <a className="block bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="h-40 w-full object-cover"
        />
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold">{hotel.name}</h3>
          <div className="flex items-center text-sm text-gray-500">
            <BuildingOffice2Icon className="w-5 h-5 mr-1" />
            <span>{hotel.location}</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-yellow-400">
            {Array.from({ length: hotel.rating }).map((_, i) => (
              <StarIcon key={i} className="w-4 h-4" />
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              {hotel.amenities.join(", ")}
            </div>
            <div className="flex items-center space-x-1">
              <CurrencyDollarIcon className="w-5 h-5 text-green-600" />
              <span className="font-bold">${hotel.price}</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
