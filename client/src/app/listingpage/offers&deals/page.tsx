"use client";

import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";
import Image from "next/image";

const offers = [
  {
    title: "25% OFF Bridal Makeover",
    service: "Bridal Makeup",
    discount: "25% OFF",
    location: "Kolkata",
    expires: "May 31, 2025",
    image: "/of1.avif",
  },
  {
    title: "₹500 OFF Monsoon Facial",
    service: "Facial Treatment",
    discount: "₹500 OFF",
    location: "Mumbai",
    expires: "June 10, 2025",
    image: "/of2.avif",
  },
  {
    title: "Buy 1 Get 1 Spa Free",
    service: "Full Body Spa",
    discount: "BOGO",
    location: "Delhi",
    expires: "June 25, 2025",
    image: "/of3.avif",
  },
  {
    title: "Hair Spa Combo ₹1199",
    service: "Hair Treatment",
    discount: "Flat ₹300 OFF",
    location: "Chennai",
    expires: "June 15, 2025",
    image: "/of4.avif",
  },
  {
    title: "Free Nail Art with Haircut",
    service: "Haircut & Styling",
    discount: "FREE Add-on",
    location: "Pune",
    expires: "May 28, 2025",
    image: "/of5.jpeg",
  },
];

export default function DealsPage() {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-[#fce4fc] to-white pt-20 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-3">
            Explore Exclusive Deals & Beauty Offers
          </h1>
          <p className="text-center text-sm md:text-base text-gray-600 mb-10 max-w-2xl mx-auto">
            Save big on bridal makeovers, skincare, and salon packages from
            top-rated beauty destinations. Limited-time discounts to help you
            glow up for any occasion 💄✨
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-fuchsia-100 hover:shadow-lg transition"
              >
                <div className="w-full h-48 relative">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 text-center">
                  <h2 className="text-lg font-bold text-purple-800 mb-1">
                    {offer.title}
                  </h2>
                  <p className="text-sm text-gray-600">
                    <strong>Service:</strong> {offer.service}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Location:</strong> {offer.location}
                  </p>
                  <p className="text-sm text-pink-500 font-medium mt-1">
                    Valid till: {offer.expires}
                  </p>
                  <div className="mt-3">
                    <span className="inline-block px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full font-semibold">
                      {offer.discount}
                    </span>
                  </div>
                  <button className="mt-4 px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full text-sm font-medium hover:shadow-md transition">
                    Book with Offer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
