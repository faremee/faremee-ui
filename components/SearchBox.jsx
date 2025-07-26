// components/SearchBox.jsx
import { useState } from "react";
import { MapPinIcon, CalendarIcon, UsersIcon } from "@heroicons/react/24/outline";

export default function SearchBox({ service }) {
  const [tripType, setTripType] = useState("roundtrip");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [depart, setDepart] = useState("");
  const [ret, setRet] = useState("");
  const [passengers, setPassengers] = useState(1);

  return (
    <form className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4">
      {/* Trip Type */}
      <div className="flex space-x-4">
        {["roundtrip", "oneway", "multicity"].map((t) => (
          <label key={t} className="flex items-center space-x-1">
            <input
              type="radio"
              name="tripType"
              value={t}
              checked={tripType === t}
              onChange={() => setTripType(t)}
            />
            <span className="capitalize">{t}</span>
          </label>
        ))}
      </div>

      {/* From/To */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative">
          <MapPinIcon className="w-5 h-5 absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder={
              service === "flights" ? "From city or airport" : "Location"
            }
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="pl-10 w-full p-2 border rounded-lg bg-white dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div className="relative">
          <MapPinIcon className="w-5 h-5 absolute top-3 left-3 text-gray-400 rotate-180" />
          <input
            type="text"
            placeholder={service === "flights" ? "To city or airport" : "Location"}
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="pl-10 w-full p-2 border rounded-lg bg-white dark:bg-gray-700 dark:text-white"
          />
        </div>
      </div>

      {/* Dates */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative">
          <CalendarIcon className="w-5 h-5 absolute top-3 left-3 text-gray-400" />
          <input
            type="date"
            value={depart}
            onChange={(e) => setDepart(e.target.value)}
            className="pl-10 w-full p-2 border rounded-lg bg-white dark:bg-gray-700 dark:text-white"
          />
        </div>
        {tripType === "roundtrip" && (
          <div className="relative">
            <CalendarIcon className="w-5 h-5 absolute top-3 left-3 text-gray-400" />
            <input
              type="date"
              value={ret}
              onChange={(e) => setRet(e.target.value)}
              className="pl-10 w-full p-2 border rounded-lg bg-white dark:bg-gray-700 dark:text-white"
            />
          </div>
        )}
      </div>

      {/* Passengers */}
      <div className="relative">
        <UsersIcon className="w-5 h-5 absolute top-3 left-3 text-gray-400" />
        <input
          type="number"
          min="1"
          max="9"
          value={passengers}
          onChange={(e) => setPassengers(Number(e.target.value))}
          className="pl-10 w-full p-2 border rounded-lg bg-white dark:bg-gray-700 dark:text-white"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
      >
        Search {service.replace("-", " ").toUpperCase()}
      </button>
    </form>
  );
}
