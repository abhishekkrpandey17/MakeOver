/* eslint-disable react/jsx-no-undef */
"use client";

import { useState } from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const mockStores = [
  {
    id: 1,
    name: "Glamour Glow Studio",
    location: "Kolkata, West Bengal",
    rating: 4.8,
    category: "Parlour",
    image: "/images/store1.jpg",
  },
  {
    id: 2,
    name: "Blush & Bloom",
    location: "Mumbai, Maharashtra",
    rating: 4.6,
    category: "Salon",
    image: "/images/store2.jpg",
  },
  {
    id: 3,
    name: "Divine Beauty Hub",
    location: "Delhi, India",
    rating: 4.9,
    category: "Spa",
    image: "/images/store3.jpg",
  },
];

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStores = mockStores.filter(
    (store) =>
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-[#f8f0ff] to-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Search Heading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-purple-800">
              Showing results{" "}
              {searchQuery ? (
                <>
                  for &rdquo;
                  <span className="text-fuchsia-600">{searchQuery}</span>&quot;
                </>
              ) : (
                "for all stores"
              )}
            </h1>
            <p className="mt-2 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              {searchQuery
                ? `Here are the top cosmetic stores, salons, spas, and parlours related to "${searchQuery}". Browse and explore services nearby.`
                : "Find your perfect salon, spa, or beauty parlour. Filter by service, city, or search by name."}
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex justify-center mb-10">
            <div className="relative w-full max-w-md">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search by name or location"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              />
            </div>
          </div>

          {/* Store Cards */}
          <div className="flex flex-col items-center gap-10">
            {filteredStores.map((store) => (
              <div
                key={store.id}
                className="w-[95%] lg:w-[70%] bg-white rounded-3xl shadow-xl hover:shadow-purple-300 transition duration-300 p-6 flex flex-col lg:flex-row gap-6"
              >
                {/* Image */}
                <div className="relative w-full lg:w-[40%] h-60 rounded-xl overflow-hidden">
                  <Image
                    src={store.image}
                    alt={store.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center w-full lg:w-[60%] space-y-2">
                  <h2 className="text-2xl font-bold text-purple-900">
                    {store.name}
                  </h2>
                  <p className="text-sm text-gray-600">📍 {store.location}</p>
                  <p className="text-sm text-purple-600 font-medium">
                    ⭐ {store.rating} • {store.category}
                  </p>
                  <button className="mt-4 px-5 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition text-sm w-fit">
                    View Store
                  </button>
                </div>
              </div>
            ))}

            {filteredStores.length === 0 && (
              <p className="text-center text-gray-500 text-sm">
                No stores found matching your search.
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
