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
    image: "imgcos1.avif",
  },
  {
    id: 2,
    name: "Blush & Bloom",
    location: "Mumbai, Maharashtra",
    rating: 4.6,
    category: "Salon",
    image: "imgcos2.avif",
  },
  {
    id: 3,
    name: "Divine Beauty Hub",
    location: "Delhi, India",
    rating: 4.9,
    category: "Spa",
    image: "imgcos3.jpeg",
  },
  {
    id: 4,
    name: "Elegance Lounge",
    location: "Chennai, Tamil Nadu",
    rating: 4.7,
    category: "Salon",
    image: "imgcos4.jpg",
  },
  {
    id: 5,
    name: "Lotus Tranquil Spa",
    location: "Bangalore, Karnataka",
    rating: 4.5,
    category: "Spa",
    image: "imgcos5.avif",
  },
];

const getHeading = (type: string) => {
  switch (type) {
    case "Salon":
      return {
        title: "Explore the Best Beauty Salons 💇‍♀️",
        subtitle:
          "From haircut to styling — curated salon experiences across your city.",
      };
    case "Spa":
      return {
        title: "Top-Rated Spas to Rejuvenate 🌿",
        subtitle:
          "Relax and refresh with our handpicked wellness and spa centers.",
      };
    case "Parlour":
      return {
        title: "Discover Local Parlours for Everyday Beauty 💅",
        subtitle:
          "Affordable beauty care and grooming parlours in your neighborhood.",
      };
    default:
      return {
        title: "Discover Top Cosmetic Stores 💄",
        subtitle:
          "Find salons, parlours, and spas that match your beauty needs.",
      };
  }
};

export default function Page() {
  const [serviceType, setServiceType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const heading = getHeading(serviceType);

  const filteredStores = mockStores.filter((store) => {
    const matchesType = !serviceType || store.category === serviceType;
    const matchesSearch =
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-[#f8f0ff] to-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-purple-800">
              {heading.title}
            </h1>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              {heading.subtitle}
            </p>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col items-center gap-6 mb-10">
            {/* Search Bar */}
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

            {/* Filter Row */}
            <div className="w-full max-w-5xl flex flex-wrap items-center justify-center gap-4">
              {/* White Selects with Custom Arrow */}
              {["Select State", "Select City", "Select Locality"].map(
                (label, index) => (
                  <div className="relative" key={index}>
                    <select className="px-5 py-2 pr-10 rounded-md bg-white text-sm text-gray-700 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 appearance-none transition hover:border-purple-400">
                      <option value="">{label}</option>
                      {label === "Select State" && (
                        <>
                          <option value="WB">West Bengal</option>
                          <option value="MH">Maharashtra</option>
                          <option value="KA">Karnataka</option>
                        </>
                      )}
                      {label === "Select City" && (
                        <>
                          <option value="kolkata">Kolkata</option>
                          <option value="mumbai">Mumbai</option>
                          <option value="bangalore">Bangalore</option>
                        </>
                      )}
                      {label === "Select Locality" && (
                        <>
                          <option value="saltlake">Salt Lake</option>
                          <option value="andheri">Andheri</option>
                          <option value="indiranagar">Indiranagar</option>
                        </>
                      )}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400 text-xs">
                      ▼
                    </div>
                  </div>
                )
              )}

              {/* Address Input */}
              <input
                type="text"
                placeholder="Address / Landmark"
                className="px-5 py-2 rounded-md border border-gray-300 text-sm bg-white shadow-sm focus:ring-2 focus:ring-purple-300"
              />

              {/* Violet Service Select */}
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="px-5 py-2 rounded-md bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white text-sm shadow-md focus:ring-2 focus:ring-purple-300"
              >
                <option value="">Select Service</option>
                <option value="Salon">Salon</option>
                <option value="Spa">Spa</option>
                <option value="Parlour">Parlour</option>
              </select>

              {/* Filter Button */}
              <button className="px-5 py-2 rounded-md bg-purple-700 text-white text-sm hover:bg-purple-800 transition">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Store Cards */}
          <div className="flex flex-col items-center gap-10">
            {filteredStores.map((store) => (
              <div
                key={store.id}
                className="w-[95%] lg:w-[70%] bg-white rounded-3xl shadow-xl hover:shadow-purple-300 transition duration-300 p-6 flex flex-col lg:flex-row gap-6"
              >
                {/* Left Image */}
                <div className="relative w-full lg:w-[40%] h-60 rounded-xl overflow-hidden">
                  <Image
                    src={"/" + store.image}
                    alt={store.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Right Content */}
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
                No stores found matching your criteria.
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
