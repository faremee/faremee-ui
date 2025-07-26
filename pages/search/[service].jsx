// pages/search/[service].jsx
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FilterSidebar from "../../components/FilterSidebar";
import SortControl from "../../components/SortControl";
import MapToggle from "../../components/MapToggle";
import Pagination from "../../components/Pagination";
import FlightCard from "../../components/FlightCard";
import HotelCard from "../../components/HotelCard";
import CarCard from "../../components/CarCard";
import PackageCard from "../../components/PackageCard";

export default function SearchResults() {
  const { service } = useRouter().query;
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("best");
  const [showMap, setShowMap] = useState(false);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // TODO: fetch results from API based on service, filters, sort, page
    setItems(Array.from({ length: 6 }, (_, i) => ({ id: i + 1 })));
  }, [service, filters, sort, page]);

  const renderCard = (item) => {
    switch (service) {
      case "flights":
        return <FlightCard key={item.id} />;
      case "hotels":
        return <HotelCard key={item.id} />;
      case "car-rentals":
        return <CarCard key={item.id} />;
      case "vacation-packages":
        return <PackageCard key={item.id} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="flex flex-col lg:flex-row flex-1 py-8 px-4 max-w-7xl mx-auto">
        <FilterSidebar service={service} onFiltersChange={setFilters} />
        <div className="flex-1 lg:pl-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold capitalize">{service} Results</h2>
            <div className="flex space-x-4">
              <SortControl value={sort} onChange={setSort} />
              <MapToggle showingMap={showMap} onToggle={() => setShowMap((m) => !m)} />
            </div>
          </div>
          {showMap ? (
            <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded mb-6">Map View</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map(renderCard)}
            </div>
          )}
          <Pagination page={page} totalPages={5} onPageChange={setPage} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
