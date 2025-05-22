"use client";

import {
  FiMapPin,
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiAlertTriangle,
} from "react-icons/fi";

export default function MyBusinessStatus() {
  const business = {
    name: "Blush & Bloom",
    category: "Salon & Spa",
    location: "Bandra West, Mumbai",
    submittedOn: "2025-05-18",
    status: "Rejected" as "Pending" | "Approved" | "Rejected", // 'Pending' | 'Approved' | 'Rejected'
    rejectionReason:
      "Uploaded PAN card was blurred. Please re-upload a clearer document.",
  };

  const statusStyle: Record<"Pending" | "Approved" | "Rejected", string> = {
    Approved: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-800",
    Rejected: "bg-red-100 text-red-700",
  };

  const statusIcon = {
    Approved: <FiCheckCircle />,
    Pending: <FiClock />,
    Rejected: <FiXCircle />,
  };

  return (
    <div className="pt-20 pb-20 bg-gradient-to-b from-[#fce7fe] to-white py-12 px-4">
      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-3xl border-l-4 border-purple-300 p-6 sm:p-8">
        <h1 className="text-2xl font-extrabold text-center text-fuchsia-700 mb-6 flex items-center justify-center gap-2">
          📋 Business Status Tracker
        </h1>

        <div className="space-y-4 text-sm sm:text-base">
          <div>
            <p className="text-gray-500">Business Name</p>
            <p className="font-bold text-gray-800 text-lg">{business.name}</p>
          </div>
          <div>
            <p className="text-gray-500">Category</p>
            <p className="text-fuchsia-700 font-semibold">
              {business.category}
            </p>
          </div>
          <div>
            <p className="text-gray-500">Location</p>
            <p className="text-gray-700 flex items-center gap-1">
              <FiMapPin className="text-purple-400" /> {business.location}
            </p>
          </div>
          <div>
            <p className="text-gray-500">Submitted On</p>
            <p className="text-gray-700 flex items-center gap-1">
              <FiClock className="text-purple-400" /> {business.submittedOn}
            </p>
          </div>
          <div>
            <p className="text-gray-500">Status</p>
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold shadow-sm ${
                statusStyle[business.status]
              }`}
            >
              {statusIcon[business.status]} {business.status}
            </div>
          </div>

          {business.status === "Rejected" && (
            <div className="bg-red-50 border border-red-200 text-red-800 p-4 mt-4 rounded-lg">
              <p className="text-sm font-semibold mb-1 flex items-center gap-2">
                <FiAlertTriangle /> Rejection Reason:
              </p>
              <p className="text-sm">{business.rejectionReason}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
