"use client";

import React, { useState } from "react";

const mockBusinesses = [
  {
    id: "biz1",
    name: "Blush & Bloom",
    service: "Salon & Spa",
    location: "Mumbai, Maharashtra",
    image: "/imgcos1.avif",
  },
  {
    id: "biz2",
    name: "Glamour Glow Studio",
    service: "Makeup Studio",
    location: "Kolkata, West Bengal",
    image: "/imgcos2.avif",
  },
  {
    id: "biz3",
    name: "Lotus Touch Spa",
    service: "Luxury Spa",
    location: "Bangalore, Karnataka",
    image: "/imgcos3.jpeg",
  },
];

const VerifyBusiness = () => {
  const [pendingBiz, setPendingBiz] = useState(mockBusinesses);

  const handleAction = (id: string, approve: boolean) => {
    alert(`${approve ? "Approved" : "Rejected"}: ${id}`);
    setPendingBiz((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="px-6 py-10">
      <h2 className="text-2xl font-bold text-purple-800 mb-6">
        Verify Pending Businesses
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pendingBiz.map((biz) => (
          <div key={biz.id} className="bg-white rounded-xl shadow-md p-4">
            <img
              src={biz.image}
              alt={biz.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-purple-800">
              {biz.name}
            </h3>
            <p className="text-sm text-gray-600 mt-1">📍 {biz.location}</p>
            <p className="text-sm text-purple-600 mt-1">🧴 {biz.service}</p>
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => handleAction(biz.id, true)}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm py-1 rounded-full"
              >
                ✅ Approve
              </button>
              <button
                onClick={() => handleAction(biz.id, false)}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm py-1 rounded-full"
              >
                ❌ Reject
              </button>
            </div>
          </div>
        ))}
        {pendingBiz.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No pending requests.
          </p>
        )}
      </div>
    </div>
  );
};

export default VerifyBusiness;
