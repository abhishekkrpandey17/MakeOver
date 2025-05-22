"use client";

import { FiMapPin, FiAlertTriangle, FiEye, FiTrash2 } from "react-icons/fi";

interface FlaggedBusinessProps {
  name: string;
  location: string;
  reason: string;
  status: "Pending" | "Reviewed";
  onView: () => void;
  onWarn: () => void;
  onRemove: () => void;
}

export default function FlaggedBusinessCard({
  name,
  location,
  reason,
  status,
  onView,
  onWarn,
  onRemove,
}: FlaggedBusinessProps) {
  return (
    <div className="bg-white border-l-4 border-red-400 shadow-md rounded-xl p-5 space-y-2 hover:shadow-lg transition">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-red-600">{name}</h3>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <FiMapPin className="text-gray-400" /> {location}
          </p>
        </div>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${
            status === "Reviewed"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {status}
        </span>
      </div>

      <p className="text-sm text-gray-700">
        <span className="font-semibold">Reason:</span> {reason}
      </p>

      <div className="flex gap-3 mt-3">
        <button
          onClick={onView}
          className="flex items-center gap-1 text-sm px-4 py-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
        >
          <FiEye /> View
        </button>
        <button
          onClick={onWarn}
          className="flex items-center gap-1 text-sm px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 hover:bg-yellow-200 transition"
        >
          <FiAlertTriangle /> Warn
        </button>
        <button
          onClick={onRemove}
          className="flex items-center gap-1 text-sm px-4 py-2 rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition"
        >
          <FiTrash2 /> Remove
        </button>
      </div>
    </div>
  );
}
