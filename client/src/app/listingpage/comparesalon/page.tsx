"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";

const salons = [
  {
    name: "Glamour Glow Studio",
    image: "/imgcos1.avif",
    location: "Kolkata, West Bengal",
    rating: 4.8,
    price: "₹1500 – ₹5000",
    services: ["Facial", "Makeup", "Hair Spa"],
  },
  {
    name: "Blush & Bloom",
    image: "/imgcos2.avif",
    location: "Mumbai, Maharashtra",
    rating: 4.6,
    price: "₹1200 – ₹4800",
    services: ["Bridal Makeup", "Haircut", "Nail Art"],
  },
  {
    name: "Lotus Touch Spa",
    image: "/imgcos3.jpeg",
    location: "Bangalore, Karnataka",
    rating: 4.7,
    price: "₹1000 – ₹4500",
    services: ["Spa", "Skin Glow Facial", "Body Wrap"],
  },
];

export default function CompareSalonPage() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelect = (name: string) => {
    if (selected.includes(name)) {
      setSelected(selected.filter((n) => n !== name));
    } else if (selected.length < 3) {
      setSelected([...selected, name]);
    }
  };

  const selectedSalons = salons.filter((salon) =>
    selected.includes(salon.name)
  );

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-[#fbe8ff] to-white pt-20 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-purple-800 mb-4">
            Compare Salons
          </h1>
          <p className="text-sm text-gray-600 mb-6">
            Choose up to 3 salons to compare side-by-side.
          </p>

          <div className="flex justify-center flex-wrap gap-4 mb-8">
            {salons.map((salon) => (
              <button
                key={salon.name}
                onClick={() => toggleSelect(salon.name)}
                className={`px-4 py-2 rounded-full border text-sm transition ${
                  selected.includes(salon.name)
                    ? "bg-purple-600 text-white"
                    : "bg-white border-purple-400 text-purple-700"
                }`}
              >
                {salon.name}
              </button>
            ))}
          </div>

          {selectedSalons.length > 0 && (
            <div className="overflow-x-auto w-full">
              <table className="min-w-[600px] md:min-w-full border text-sm bg-white shadow-md rounded-xl overflow-hidden">
                <thead className="bg-purple-100 text-purple-700">
                  <tr>
                    <th className="py-3 px-4 text-left">Feature</th>
                    {selectedSalons.map((salon, i) => (
                      <th key={i} className="py-3 px-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-24 h-20 relative rounded overflow-hidden mb-2">
                            <Image
                              src={salon.image}
                              alt={salon.name}
                              fill
                              className="rounded object-cover"
                            />
                          </div>
                          <span className="font-semibold text-purple-700 text-sm text-center">
                            {salon.name}
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-2 px-4 font-medium text-gray-600">
                      Location
                    </td>
                    {selectedSalons.map((s, i) => (
                      <td key={i} className="py-2 px-4 text-center">
                        {s.location}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 px-4 font-medium text-gray-600">
                      Rating
                    </td>
                    {selectedSalons.map((s, i) => (
                      <td key={i} className="py-2 px-4 text-center">
                        ⭐ {s.rating}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 px-4 font-medium text-gray-600">
                      Price Range
                    </td>
                    {selectedSalons.map((s, i) => (
                      <td key={i} className="py-2 px-4 text-center">
                        {s.price}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 px-4 font-medium text-gray-600">
                      Services
                    </td>
                    {selectedSalons.map((s, i) => (
                      <td key={i} className="py-2 px-4">
                        <ul className="list-disc text-center list-inside mx-auto w-fit text-sm">
                          {s.services.map((srv, idx) => (
                            <li key={idx}>{srv}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
