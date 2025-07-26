import Head from "next/head";
import React, { Suspense, useState } from "react";

const SearchBox = React.lazy(() => import("../components/SearchBox"));

// Dummy hotel data (replace with API data!)
const HOTELS = [
  {
    id: 1,
    name: "The Grand Palace",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    price: 220,
    rating: 4.8,
    stars: 5,
    amenities: ["Free WiFi", "Pool", "Breakfast", "Parking"],
  },
  {
    id: 2,
    name: "Budget Stay",
    location: "Berlin, Germany",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    price: 65,
    rating: 4.2,
    stars: 3,
    amenities: ["Free WiFi", "Parking"],
  },
  // Add more hotels...
];

const filterHotels = (hotels, filters, sort) => {
  let filtered = [...hotels];
  if (filters.stars) filtered = filtered.filter(h => h.stars === filters.stars);
  if (filters.maxPrice) filtered = filtered.filter(h => h.price <= filters.maxPrice);
  if (filters.amenity) filtered = filtered.filter(h => h.amenities.includes(filters.amenity));
  if (sort === "price") filtered.sort((a, b) => a.price - b.price);
  if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating);
  return filtered;
};

export default function HotelsPage() {
  const [filters, setFilters] = useState({ stars: null, maxPrice: null, amenity: null });
  const [sort, setSort] = useState("rating");

  const hotelsToShow = filterHotels(HOTELS, filters, sort);

  return (
    <>
      <Head>
        <title>Faremee | Hotels</title>
        <meta name="description" content="Book hotels with Faremee. Find great hotel deals for every budget." />
        {/* ...other meta tags... */}
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Banner */}
          <div className="rounded-xl overflow-hidden shadow-lg mb-8">
            <img
              src="https://faremee.com/assets/hotels-banner.jpg"
              alt="Hotels banner"
              className="w-full h-48 object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            Book Hotels with Faremee
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Find amazing deals on luxury and budget hotels around the world.
          </p>
          {/* Search Box */}
          <Suspense
            fallback={
              <div className="flex items-center text-gray-600 dark:text-gray-300 mt-6 animate-fadeIn">
                <svg className="animate-spin h-5 w-5 mr-2 text-blue-500" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                Loading search box...
              </div>
            }
          >
            <SearchBox activeTab="Hotels" aria-label="Hotel search box" />
          </Suspense>

          {/* Filters and Sort */}
          <div className="flex flex-wrap gap-4 my-8 items-center">
            <select
              className="border rounded px-2 py-1"
              value={filters.stars || ""}
              onChange={e => setFilters(f => ({ ...f, stars: e.target.value ? Number(e.target.value) : null }))}
              aria-label="Filter by star rating"
            >
              <option value="">All Stars</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
            </select>
            <input
              type="number"
              placeholder="Max Price"
              className="border rounded px-2 py-1 w-24"
              min={0}
              value={filters.maxPrice || ""}
              onChange={e => setFilters(f => ({ ...f, maxPrice: e.target.value ? Number(e.target.value) : null }))}
              aria-label="Filter by max price"
            />
            <select
              className="border rounded px-2 py-1"
              value={filters.amenity || ""}
              onChange={e => setFilters(f => ({ ...f, amenity: e.target.value || null }))}
              aria-label="Filter by amenity"
            >
              <option value="">All Amenities</option>
              <option value="Free WiFi">Free WiFi</option>
              <option value="Pool">Pool</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Parking">Parking</option>
            </select>
            <span className="ml-auto flex items-center gap-2">
              <span>Sort:</span>
              <button
                className={`px-2 py-1 rounded ${sort === "rating" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
                onClick={() => setSort("rating")}
              >
                Top Rated
              </button>
              <button
                className={`px-2 py-1 rounded ${sort === "price" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
                onClick={() => setSort("price")}
              >
                Lowest Price
              </button>
            </span>
          </div>

          {/* Hotel Cards Grid */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {hotelsToShow.map(hotel => (
              <div key={hotel.id} className="rounded-lg shadow bg-white dark:bg-gray-900 overflow-hidden transition hover:scale-105 hover:shadow-xl">
                <img src={hotel.image} alt={`${hotel.name} image`} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-semibold">{hotel.name}</h2>
                    <span className="bg-yellow-400 text-white px-2 py-1 rounded text-xs font-bold" aria-label={`${hotel.stars} stars`}>
                      {hotel.stars}★
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{hotel.location}</p>
                  <div className="flex items-center gap-2 my-2">
                    <span className="text-green-600 font-bold">${hotel.price}/night</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs" aria-label={`Rating ${hotel.rating}`}>
                      {hotel.rating}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {hotel.amenities.map((a, i) => (
                      <span key={i} className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-xs">{a}</span>
                    ))}
                  </div>
                  {/* Book Button */}
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" aria-label={`Book ${hotel.name}`}>
                    Book Now
                  </button>
                </div>
              </div>
            ))}
            {hotelsToShow.length === 0 && (
              <div className="col-span-full text-center py-8 text-xl text-gray-500">
                No hotels match your criteria.
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
