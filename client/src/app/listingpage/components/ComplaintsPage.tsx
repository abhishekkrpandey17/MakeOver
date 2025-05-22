"use client";

import { useState } from "react";

const filters = [
  "All Complaints",
  "Pending",
  "In Progress",
  "Resolved",
  "Urgent",
];
const complaints = [
  {
    id: 1,
    user: "Riya Sharma",
    email: "riya@gmail.com",
    business: "Blush & Bloom",
    submitted: "21 May 2025",
    status: "Pending",
    type: "Rude Staff",
    message:
      "I was overcharged and the staff was rude when asked about the service charges.",
  },
  {
    id: 2,
    user: "Ankit Verma",
    email: "ankitv@gmail.com",
    business: "Glow Beauty Hub",
    submitted: "20 May 2025",
    status: "Resolved",
    type: "Overcharging",
    message: "They charged more than listed for a haircut.",
  },
  {
    id: 3,
    user: "Priya Nanda",
    email: "priyananda@gmail.com",
    business: "PrettyNest",
    submitted: "19 May 2025",
    status: "In Progress",
    type: "Unprofessional Behavior",
    message: "Staff kept taking personal calls during my session.",
  },
  {
    id: 4,
    user: "Neha Kapoor",
    email: "neha.kapoor@yahoo.com",
    business: "Glam Goddess",
    submitted: "18 May 2025",
    status: "Urgent",
    type: "Health Issue",
    message:
      "I got a rash after using their facial product. Needs immediate attention.",
  },
  {
    id: 5,
    user: "Tarun Mehra",
    email: "tarunmehra@outlook.com",
    business: "Sparkle Studio",
    submitted: "18 May 2025",
    status: "Pending",
    type: "Misleading Ad",
    message: "Ad mentioned 50% off but full price was charged.",
  },
  {
    id: 6,
    user: "Sanya Iyer",
    email: "sanya.iyer@gmail.com",
    business: "Glow Beauty Hub",
    submitted: "17 May 2025",
    status: "Resolved",
    type: "Delay in Service",
    message: "Had to wait 40 minutes even after booking slot.",
  },
];

export default function ComplaintsPage() {
  const [activeFilter, setActiveFilter] = useState("All Complaints");

  const handleExport = () => {
    const headers = [
      "User",
      "Email",
      "Business",
      "Date",
      "Status",
      "Type",
      "Message",
    ];
    const rows = complaints.map((c) => [
      c.user,
      c.email,
      c.business,
      c.submitted,
      c.status,
      c.type,
      c.message.replace(/\n/g, " "),
    ]);

    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "complaints_export.csv";
    link.click();
  };

  return (
    <main className="bg-gradient-to-r from-pink-50 to-purple-50 min-h-screen px-6 py-10">
      <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center">
        🛠 Complaints Management
      </h1>

      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 text-sm font-semibold rounded-full border ${
              activeFilter === filter
                ? "bg-purple-600 text-white"
                : "bg-white text-purple-700 border-purple-300"
            } transition`}
          >
            {filter}
          </button>
        ))}
        <button
          onClick={handleExport}
          className="ml-4 px-4 py-2 text-sm font-semibold bg-green-600 text-white rounded-full hover:bg-green-700 transition"
        >
          Export CSV 📤
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {complaints
          .filter(
            (c) =>
              activeFilter === "All Complaints" || c.status === activeFilter
          )
          .map((complaint) => (
            <div
              key={complaint.id}
              className="bg-white p-5 rounded-2xl shadow-md border-l-4 border-pink-400"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-bold text-lg text-purple-800">
                  {complaint.user}
                </h2>
                <span className="text-xs text-gray-500">
                  {complaint.submitted}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Business:</strong> {complaint.business}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Type:</strong> {complaint.type}
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Message:</strong> {complaint.message}
              </p>
              <span
                className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                  complaint.status === "Resolved"
                    ? "bg-green-100 text-green-700"
                    : complaint.status === "In Progress"
                    ? "bg-yellow-100 text-yellow-800"
                    : complaint.status === "Urgent"
                    ? "bg-red-100 text-red-700"
                    : "bg-purple-100 text-purple-800"
                }`}
              >
                {complaint.status}
              </span>
            </div>
          ))}
      </div>
    </main>
  );
}
