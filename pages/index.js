// pages/index.js
import Header from "../components/Header";
import DealsCarousel from "../components/DealsCarousel";
import SearchBox from "../components/SearchBox";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1 py-12 px-4 space-y-12 max-w-7xl mx-auto">
        <DealsCarousel />
        <SearchBox service="flights" />
      </main>
      <Footer />
    </div>
  );
}
