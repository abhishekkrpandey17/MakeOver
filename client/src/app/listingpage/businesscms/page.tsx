"use client";

import { useState } from "react";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";
import {
  FaChartLine,
  FaCrown,
  FaRupeeSign,
  FaCalendarAlt,
  FaUserCheck,
  FaUserTimes,
  FaStar,
} from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

const tabs = [
  { id: "sales", label: "Track Sales" },
  { id: "support", label: "Profile Setup Support" },
  { id: "done", label: "Booking Done" },
  { id: "upcoming", label: "Bookings Upcoming" },
  { id: "cancelled", label: "Cancelled Bookings" },
  { id: "ratings", label: "Staff-wise Ratings" },
  { id: "reviews", label: "Customer Reviews" }, // New Tab
];

const salesData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "₹ Revenue",
      data: [20000, 30000, 50000, 65000, 85000],
      borderColor: "#d946ef",
      backgroundColor: "#fbcfe8",
      tension: 0.4,
    },
  ],
};

export default function BusinessCMSPage() {
  const [activeTab, setActiveTab] = useState("sales");

  const renderSection = () => {
    switch (activeTab) {
      case "sales":
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-pink-100 p-5 rounded-2xl shadow flex items-center gap-4">
                <FaRupeeSign className="text-2xl text-purple-700" />
                <div>
                  <h3 className="text-lg font-bold text-purple-800">
                    Monthly Revenue
                  </h3>
                  <p className="text-sm text-gray-700">₹85,000 this month</p>
                </div>
              </div>
              <div className="bg-pink-100 p-5 rounded-2xl shadow flex items-center gap-4">
                <FaCrown className="text-2xl text-fuchsia-700" />
                <div>
                  <h3 className="text-lg font-bold text-fuchsia-800">
                    Top Service
                  </h3>
                  <p className="text-sm text-gray-700">
                    Facial Glow Package ✨
                  </p>
                </div>
              </div>
              <div className="bg-pink-100 p-5 rounded-2xl shadow flex items-center gap-4 col-span-2">
                <FaChartLine className="text-2xl text-fuchsia-600" />
                <div>
                  <h3 className="text-lg font-bold text-fuchsia-800">
                    Total Bookings
                  </h3>
                  <p className="text-sm text-gray-700">
                    📆 327 bookings this month
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow">
              <h3 className="text-center font-bold text-fuchsia-700 mb-2">
                📈 Revenue Trend
              </h3>
              <Line data={salesData} />
            </div>
          </div>
        );

      case "support":
        return (
          <div className="text-left space-y-4">
            <h3 className="text-xl font-bold text-pink-600">
              💡 Profile Setup Guide
            </h3>
            <ul className="list-decimal ml-6 text-gray-700 space-y-2">
              <li>Upload business logo and banner</li>
              <li>Add salon description and specialties</li>
              <li>Add services with pricing and duration</li>
              <li>Assign staff to each service</li>
              <li>Set working hours and holiday calendar</li>
              <li>Enable WhatsApp or call bookings</li>
              <li>Connect payment gateway (Razorpay/Stripe)</li>
            </ul>
            <div className="bg-white p-4 rounded-xl shadow mt-6">
              <p className="text-sm text-purple-500 italic">
                📝 Need help? Contact support at <b>support@makeover.in</b>
              </p>
            </div>
          </div>
        );

      case "done":
        return (
          <div className="grid gap-4">
            {["Riya Sharma", "Sneha Patil", "Komal Sinha"].map((name, idx) => (
              <div key={idx} className="bg-green-100 p-4 rounded-xl shadow">
                <FaUserCheck className="text-green-600 mb-1" />
                <h4 className="font-semibold">{name}</h4>
                <p className="text-sm">
                  Service: {["Hair Cut", "Pedicure", "Hair Color"][idx]} |
                  Rating: ⭐⭐⭐⭐
                </p>
                <p className="text-xs text-gray-600">
                  Date: {["May 16", "May 18", "May 20"][idx]}
                </p>
              </div>
            ))}
          </div>
        );

      case "upcoming":
        return (
          <div className="grid gap-4">
            {[
              { name: "Nidhi Kapoor", time: "3:00 PM", staff: "Meena" },
              { name: "Kiran Rai", time: "5:30 PM", staff: "Riya" },
              { name: "Pooja Sinha", time: "6:00 PM", staff: "Aarti" },
            ].map((item, i) => (
              <div key={i} className="bg-yellow-100 p-4 rounded-xl shadow">
                <FaCalendarAlt className="text-yellow-600 mb-1" />
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm">
                  ⏰ {item.time} | Staff: {item.staff}
                </p>
                <p className="text-xs text-gray-600">
                  Service: {["Facial", "Hair Spa", "Cleanup"][i]}
                </p>
              </div>
            ))}
          </div>
        );

      case "cancelled":
        return (
          <div className="space-y-4">
            <div className="bg-red-100 p-4 rounded-xl shadow">
              <FaUserTimes className="text-red-600 mb-1" />
              <h4 className="font-semibold">Shalini Verma</h4>
              <p className="text-sm text-gray-700">
                Cancelled due to personal emergency
              </p>
              <p className="text-xs text-gray-600">Date: May 14</p>
            </div>
            <div className="bg-red-100 p-4 rounded-xl shadow">
              <FaUserTimes className="text-red-600 mb-1" />
              <h4 className="font-semibold">Ritu Tiwari</h4>
              <p className="text-sm text-gray-700">
                Cancelled: Appointment clash
              </p>
              <p className="text-xs text-gray-600">Date: May 12</p>
            </div>
          </div>
        );

      case "ratings":
        return (
          <div className="grid gap-4">
            {[
              { name: "Riya Sharma", rating: 4.5, reviews: 22 },
              { name: "Meena Gupta", rating: 4.9, reviews: 30 },
              { name: "Aarti Joshi", rating: 4.6, reviews: 18 },
            ].map((staff, index) => (
              <div key={index} className="bg-blue-100 p-4 rounded-xl shadow">
                <FaStar className="text-blue-600 mb-2" />
                <h4 className="font-semibold">{staff.name}</h4>
                <p className="text-sm">Avg Rating: {staff.rating} ⭐</p>
                <p className="text-xs text-gray-600">
                  {staff.reviews} verified reviews
                </p>
              </div>
            ))}
          </div>
        );

      case "reviews":
        return (
          <div className="space-y-4">
            {[
              {
                name: "Nikita Jain",
                stars: 5,
                review:
                  "Absolutely loved the facial session! Staff was sweet and skilled. 🌸",
                date: "May 19, 2025",
              },
              {
                name: "Pallavi Sinha",
                stars: 4,
                review:
                  "Hair spa was relaxing. Could improve on waiting time, though.",
                date: "May 17, 2025",
              },
              {
                name: "Rashmi Chauhan",
                stars: 5,
                review:
                  "Manicure was perfect and ambience was calming 💅 Highly recommended!",
                date: "May 16, 2025",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-purple-50 border border-purple-200 rounded-xl shadow p-5"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-bold text-fuchsia-700">
                    {item.name}
                  </h4>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <div className="text-yellow-500 mb-2">
                  {"⭐".repeat(item.stars)}
                  {"☆".repeat(5 - item.stars)}
                </div>
                <p className="text-gray-700 text-sm italic">“{item.review}”</p>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-pink-100 via-purple-50 to-white pt-20 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-fuchsia-700 mb-3">
            🎀 Business CMS Dashboard
          </h1>
          <p className="text-purple-500 text-sm mb-6">
            Manage your bookings, track performance, and build trust 🌸
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition ${
                  activeTab === tab.id
                    ? "bg-fuchsia-600 text-white shadow"
                    : "bg-white text-purple-700 border-purple-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow p-6 text-left max-w-3xl mx-auto">
            {renderSection()}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
