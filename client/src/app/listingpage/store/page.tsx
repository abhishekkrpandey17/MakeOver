"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import {
  FiMapPin,
  FiPhone,
  FiStar,
  FiScissors,
  FiClock,
  FiImage,
  FiX,
} from "react-icons/fi";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";

export default function Page() {
  const { id } = useParams();
  const router = useRouter();
  interface Staff {
    name: string;
    title: string;
    specialty: string;
    image: string;
  }

  const [activeStaff, setActiveStaff] = useState<Staff | null>(null);

  const store = {
    id,
    name: "Blush & Bloom",
    location: "Bandra West, Mumbai, Maharashtra",
    rating: 4.7,
    category: "Salon & Spa",
    phone: "+91 9876543210",
    hours: "10 AM – 8 PM (Mon–Sun)",
    services: ["Haircut", "Facial", "Manicure", "Pedicure", "Bridal Makeup"],
    gallery: ["/imgcos1.avif", "/images/store2.avif", "/imgcos3.jpeg"],
    staff: [
      {
        name: "Anjali Verma",
        title: "Senior Stylist",
        specialty: "Hair Coloring & Layer Cuts",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
      },
      {
        name: "Ritika Mehra",
        title: "Makeup Artist",
        specialty: "Bridal & Editorial Makeup",
        image: "https://randomuser.me/api/portraits/women/57.jpg",
      },
    ],
  };

  return (
    <>
      <div className="bg-[#fce7fe]">
        <Header />
        <div className="bg-gradient-to-b mt-6 from-[#fce7fe] to-white pb-24">
          {/* Banner */}
          <div className="relative h-56 w-full max-w-5xl mx-auto mt-0 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/store2.avif"
              fill
              alt="Store Banner"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 flex items-end p-6">
              <div className="text-white">
                <h1 className="text-3xl font-bold">{store.name}</h1>
                <p className="flex items-center gap-2 text-sm text-purple-200">
                  <FiMapPin /> {store.location}
                </p>
                <p className="text-yellow-300 flex items-center gap-1 text-sm mt-1">
                  <FiStar /> {store.rating} / 5 — {store.category}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-6xl mx-auto px-4 mt-10 space-y-10">
            {/* Contact + Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h2 className="text-xl font-semibold text-purple-700 mb-2">
                  📞 Contact
                </h2>
                <p className="text-gray-800 flex items-center gap-2">
                  <FiPhone /> {store.phone}
                </p>
                <p className="text-gray-800 flex items-center gap-2 mt-2">
                  <FiClock /> {store.hours}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h2 className="text-xl font-semibold text-purple-700 mb-2">
                  💅 Services Offered
                </h2>
                <ul className="text-gray-800 space-y-1 text-sm">
                  {store.services.map((s, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FiScissors className="text-purple-500" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Gallery */}
            <div className="overflow-y-hidden">
              <h2 className="text-xl font-semibold text-purple-700 mb-4 flex items-center gap-2">
                <FiImage /> Gallery
              </h2>
              <div className="flex gap-4 overflow-x-auto scrollbar-hide overflow-y-hidden">
                {store.gallery.map((img, i) => (
                  <div
                    key={i}
                    className="min-w-[160px] h-[110px] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
                  >
                    <Image
                      src={img}
                      alt={`Gallery ${i}`}
                      width={160}
                      height={110}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Staff */}
            <div>
              <h2 className="text-xl font-semibold text-purple-700 mb-4">
                👩‍🎤 Our Staff
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {store.staff.map((s, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveStaff(s)}
                    className="cursor-pointer bg-white p-4 rounded-xl shadow hover:shadow-lg transition text-center"
                  >
                    <Image
                      src={s.image}
                      alt={s.name}
                      width={100}
                      height={100}
                      className="mx-auto rounded-full object-cover h-24 w-24"
                    />
                    <h3 className="text-purple-800 font-semibold mt-2">
                      {s.name}
                    </h3>
                    <p className="text-sm text-gray-500">{s.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-10">
              <button className="bg-gradient-to-r from-purple-600 to-fuchsia-600 px-8 py-3 text-white font-semibold rounded-full hover:shadow-lg transition">
                📅 Book Appointment Now
              </button>
            </div>
          </div>

          {/* Staff Modal */}
          {activeStaff && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-2xl shadow-xl w-[90%] max-w-md relative">
                <button
                  onClick={() => setActiveStaff(null)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                >
                  <FiX size={22} />
                </button>
                <Image
                  src={activeStaff.image}
                  alt={activeStaff.name}
                  width={120}
                  height={120}
                  className="mx-auto rounded-full object-cover h-28 w-28 mb-4"
                />
                <h3 className="text-xl font-bold text-purple-700 text-center">
                  {activeStaff.name}
                </h3>
                <p className="text-center text-sm text-gray-500">
                  {activeStaff.title}
                </p>
                <p className="text-center text-gray-700 mt-2">
                  ✨ Specialty:{" "}
                  <span className="font-medium">{activeStaff.specialty}</span>
                </p>
                <div className="mt-5 flex flex-col items-center gap-3">
                  <button className="px-5 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
                    Book with {activeStaff.name}
                  </button>
                  <button
                    className="text-sm text-fuchsia-600 underline hover:text-fuchsia-800"
                    onClick={() => {
                      router.push(
                        `listingpage/staff/${activeStaff.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`
                      );
                      setActiveStaff(null);
                    }}
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
