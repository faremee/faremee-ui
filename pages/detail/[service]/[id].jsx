// pages/detail/[service]/[id].jsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function DetailPage() {
  const { service, id } = useRouter().query;
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (!service || !id) return;
    // TODO: fetch details from API, e.g. `/api/${service}/${id}`
    setItem({ id, service, /* mock data fields below */ });
  }, [service, id]);

  if (!item) return <div className="min-h-screen"><Header /><p className="p-8">Loading...</p></div>;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto p-8 space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow mt-8">
        <h1 className="text-2xl font-bold capitalize">
          {service.replace("-", " ")} Details
        </h1>

        {/* Example details section */}
        {service === "flights" && (
          <div className="space-y-4">
            <p>Flight ID: {item.id}</p>
            {/* TODO: render full flight itinerary, pricing, refundable toggle, add-ons */}
          </div>
        )}

        {service === "hotels" && (
          <div className="space-y-4">
            <p>Hotel ID: {item.id}</p>
            {/* TODO: render full hotel details, room types, reviews */}
          </div>
        )}

        {service === "car-rentals" && (
          <div className="space-y-4">
            <p>Car Rental ID: {item.id}</p>
            {/* TODO: render car specs, rental terms */}
          </div>
        )}

        {service === "vacation-packages" && (
          <div className="space-y-4">
            <p>Package ID: {item.id}</p>
            {/* TODO: render itinerary days, inclusions */}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
