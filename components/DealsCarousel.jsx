// components/DealsCarousel.jsx
import { useEffect, useState } from "react";

export default function DealsCarousel() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    // TODO: replace with real API call
    setDeals([
      { id: 1, title: "50% off on Paris Flights", img: "/deals/paris.jpg" },
      { id: 2, title: "Luxury Bali Resorts", img: "/deals/bali.jpg" },
      { id: 3, title: "NYC Weekend Getaway", img: "/deals/nyc.jpg" },
    ]);
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Top Deals</h2>
      <div className="flex overflow-x-auto space-x-4">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="min-w-[300px] bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden"
          >
            <img
              src={deal.img}
              alt={deal.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{deal.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
