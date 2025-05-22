"use client";

import { useState } from "react";
import {
  FaSmile,
  FaFrown,
  FaStore,
  FaTags,
  FaChartLine,
  FaBullhorn,
  FaSearch,
} from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function AdminSentimentDashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Positive Mentions",
        data: [22, 34, 45, 50, 38],
        borderColor: "#34d399",
        backgroundColor: "#ecfdf5",
      },
      {
        label: "Negative Mentions",
        data: [12, 19, 8, 10, 15],
        borderColor: "#f87171",
        backgroundColor: "#fef2f2",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        📊 User Sentiment & Offer Intelligence Dashboard
      </h1>

      {/* Search & Keyword Insights */}
      <div className="bg-white p-6 rounded-2xl shadow mb-8 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <FaSearch className="text-purple-600" />
          <input
            type="text"
            placeholder="Search keywords, products, or stores..."
            className="w-full border border-purple-200 rounded-lg px-4 py-2 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-green-50 p-4 rounded-xl text-center">
            <FaSmile className="text-green-500 text-xl mx-auto" />
            <p className="text-sm mt-2 text-gray-600">Positive Users</p>
            <p className="text-lg font-bold text-green-600">1123</p>
          </div>
          <div className="bg-red-50 p-4 rounded-xl text-center">
            <FaFrown className="text-red-500 text-xl mx-auto" />
            <p className="text-sm mt-2 text-gray-600">Negative Users</p>
            <p className="text-lg font-bold text-red-600">321</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-xl text-center">
            <FaTags className="text-blue-500 text-xl mx-auto" />
            <p className="text-sm mt-2 text-gray-600">Tracked Keywords</p>
            <p className="text-lg font-bold text-blue-600">87</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-xl text-center">
            <FaStore className="text-yellow-500 text-xl mx-auto" />
            <p className="text-sm mt-2 text-gray-600">Stores Monitored</p>
            <p className="text-lg font-bold text-yellow-600">58</p>
          </div>
        </div>
      </div>

      {/* Graph Section */}
      <div className="bg-white p-6 rounded-2xl shadow max-w-4xl mx-auto mb-8">
        <h2 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
          <FaChartLine /> Sentiment Over Time
        </h2>
        <Line data={chartData} />
      </div>

      {/* Offers and Suggestions */}
      <div className="bg-white p-6 rounded-2xl shadow max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
          <FaBullhorn /> Suggested Offers & Ads
        </h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li>
            🎯 Promote top-rated lipsticks with a &ldquo;Buy 1 Get 1&#34; ad on
            Instagram.
          </li>
          <li>
            🛍️ Feature the keyword &ldquo;organic facial&ldquo; in search ads —
            300+ positive mentions.
          </li>
          <li>
            💄 Bundle skincare sets with 15% off to improve brand sentiment.
          </li>
          <li>
            📦 Run loyalty bonus ads for stores with 4.5⭐ ratings this week.
          </li>
        </ul>
      </div>
    </div>
  );
}
