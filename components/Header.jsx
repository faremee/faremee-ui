import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // <-- Bars3Icon replaces MenuIcon

export default function Header() {
  const [open, setOpen] = useState(false);
  const tabs = [
    { label: "Flights", href: "/flights" },
    { label: "Hotels", href: "/hotels" },
    { label: "Car Rentals", href: "/car-rentals" },
    { label: "Vacation Packages", href: "/vacation-packages" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-blue-700">faremee</a>
        </Link>

        {/* Mobile menu button */}
        <button
          className="sm:hidden p-2 text-gray-700 dark:text-gray-300"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Links */}
        <nav className={`${open ? "block" : "hidden"} sm:flex space-x-6`}>
          {tabs.map((tab) => (
            <Link key={tab.href} href={tab.href}>
              <a className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">
                {tab.label}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
