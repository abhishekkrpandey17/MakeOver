"use client";

import { useState } from "react";
import {
  FiMapPin,
  FiCheckCircle,
  FiXCircle,
  FiEye,
  FiX,
  FiDownload,
} from "react-icons/fi";

export default function BusinessVerificationList() {
  const [businesses] = useState([
    {
      id: 1,
      name: "Blush & Bloom",
      location: "Bandra West, Mumbai",
      category: "Salon & Spa",
      owner: "Riya Sharma",
      phone: "+91 9876543210",
      docs: {
        pan: "/docs/pan_blushbloom.pdf",
        registration: "/docs/reg_blushbloom.pdf",
        verification: "/docs/verify_blushbloom.pdf",
      },
    },
    {
      id: 2,
      name: "Glow Beauty Hub",
      location: "Sector 21, Chandigarh",
      category: "Makeup Studio",
      owner: "Neha Kapoor",
      phone: "+91 9988776655",
      docs: {
        pan: "/docs/pan_glowbeauty.pdf",
        registration: "/docs/reg_glowbeauty.pdf",
        verification: "/docs/verify_glowbeauty.pdf",
      },
    },
    {
      id: 3,
      name: "PrettyNest",
      location: "Indiranagar, Bengaluru",
      category: "Skin Clinic",
      owner: "Tina Das",
      phone: "+91 8765432109",
      docs: {
        pan: "/docs/pan_prettynest.pdf",
        registration: "/docs/reg_prettynest.pdf",
        verification: "/docs/verify_prettynest.pdf",
      },
    },
  ]);

  const [selected, setSelected] = useState<{
    id: number;
    name: string;
    location: string;
    category: string;
    owner: string;
    phone: string;
    docs: {
      pan: string;
      registration: string;
      verification: string;
    };
  } | null>(null);

  const handleApprove = (id: number) => {
    alert(`✅ Approved business ID: ${id}`);
  };

  const handleReject = (id: number) => {
    alert(`❌ Rejected business ID: ${id}`);
  };

  const handleView = (biz: {
    id: number;
    name: string;
    location: string;
    category: string;
    owner: string;
    phone: string;
    docs: {
      pan: string;
      registration: string;
      verification: string;
    };
  }) => {
    setSelected(biz);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-6 sm:p-10">
      <h1 className="text-3xl font-extrabold text-purple-700 mb-8 text-center">
        🗂 Business Verification Requests
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {businesses.map((biz) => (
          <div
            key={biz.id}
            className="bg-white border border-yellow-200 rounded-2xl shadow-md p-5 flex flex-col justify-between hover:shadow-lg transition"
          >
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-yellow-700">
                    {biz.name}
                  </h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <FiMapPin /> {biz.location}
                  </p>
                  <p className="text-sm mt-1 text-purple-700 font-medium underline underline-offset-2">
                    {biz.category}
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 shadow-sm">
                  Pending
                </span>
              </div>
            </div>

            <div className="flex justify-between mt-5 flex-wrap gap-2">
              <button
                onClick={() => handleApprove(biz.id)}
                className="flex items-center gap-1 text-sm px-4 py-1.5 rounded-full bg-green-100 text-green-700 hover:bg-green-200"
              >
                <FiCheckCircle /> Approve
              </button>
              <button
                onClick={() => handleReject(biz.id)}
                className="flex items-center gap-1 text-sm px-4 py-1.5 rounded-full bg-red-100 text-red-700 hover:bg-red-200"
              >
                <FiXCircle /> Reject
              </button>
              <button
                onClick={() => handleView(biz)}
                className="flex items-center gap-1 text-sm px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200"
              >
                <FiEye /> View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              onClick={() => setSelected(null)}
            >
              <FiX size={22} />
            </button>

            <h2 className="text-xl font-bold text-purple-700 mb-4">
              📄 Business Details
            </h2>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Name:</strong> {selected.name}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Owner:</strong> {selected.owner}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Phone:</strong> {selected.phone}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Location:</strong> {selected.location}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              <strong>Category:</strong> {selected.category}
            </p>

            <h3 className="text-sm font-semibold text-purple-700 mb-1">
              Uploaded Documents:
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={selected.docs.pan}
                  target="_blank"
                  className="flex items-center gap-2 text-blue-600 hover:underline"
                  download
                >
                  <FiDownload /> PAN Card
                </a>
              </li>
              <li>
                <a
                  href={selected.docs.registration}
                  target="_blank"
                  className="flex items-center gap-2 text-blue-600 hover:underline"
                  download
                >
                  <FiDownload /> Business Registration
                </a>
              </li>
              <li>
                <a
                  href={selected.docs.verification}
                  target="_blank"
                  className="flex items-center gap-2 text-blue-600 hover:underline"
                  download
                >
                  <FiDownload /> Verification Document
                </a>
              </li>
            </ul>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => {
                  alert(`✅ Approved business ID: ${selected.id}`);
                  setSelected(null);
                }}
                className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm hover:bg-green-200"
              >
                Approve
              </button>
              <button
                onClick={() => {
                  alert(`❌ Rejected business ID: ${selected.id}`);
                  setSelected(null);
                }}
                className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm hover:bg-red-200"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
