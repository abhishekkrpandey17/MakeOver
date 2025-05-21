"use client";

import { useState } from "react";
import {
  FaUserCheck,
  FaChartBar,
  FaStar,
  FaStore,
  FaSadTear,
  FaExclamationTriangle,
} from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

const tabs = [
  { id: "activity", label: "User Activity", icon: <FaUserCheck /> },
  { id: "engagement", label: "Engagement Dashboard", icon: <FaChartBar /> },
  { id: "toprated", label: "Top Rated Stores", icon: <FaStar /> },
  { id: "toporders", label: "Top Orders Stores", icon: <FaStore /> },
  { id: "lowrating", label: "Low Rating Stores", icon: <FaSadTear /> },
  { id: "complaints", label: "Complaints", icon: <FaExclamationTriangle /> },
];

const tabHeadings: { [key: string]: { title: string; subtitle: string } } = {
  activity: {
    title: "📊 User Activity Dashboard",
    subtitle:
      "Monitor real-time user engagement across logins, content, and interactions to optimize platform performance.",
  },
  engagement: {
    title: "📈 Engagement Analytics",
    subtitle:
      "Visualize trends in user behavior, sessions, and content performance to drive strategic decisions.",
  },
  toprated: {
    title: "🏆 Top Rated Stores",
    subtitle:
      "Explore the highest-rated service providers trusted and loved by our community.",
  },
  toporders: {
    title: "📦 Top Orders Performance",
    subtitle:
      "Track stores receiving the most bookings — a sign of excellent service and trust.",
  },
  lowrating: {
    title: "⚠️ Low Rating Alerts",
    subtitle:
      "Identify underperforming stores and address user feedback to improve experiences.",
  },
  complaints: {
    title: "📩 User Complaints",
    subtitle:
      "Review issues raised by users to ensure service quality and maintain community trust.",
  },
};

const engagementGraph = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Active Users",
      data: [120, 200, 180, 250, 300],
      borderColor: "#f472b6",
      backgroundColor: "#fce7f3",
      tension: 0.4,
    },
  ],
};

export default function AdminCMSPage() {
  const [activeTab, setActiveTab] = useState("activity");

  const renderTab = () => {
    switch (activeTab) {
      case "activity":
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="bg-rose-100 p-4 rounded-xl shadow">
                <p className="text-2xl font-bold text-rose-600">👩‍💻 320</p>
                <p className="text-sm text-gray-600">Users Logged In</p>
              </div>
              <div className="bg-pink-100 p-4 rounded-xl shadow">
                <p className="text-2xl font-bold text-pink-600">✍️ 45</p>
                <p className="text-sm text-gray-600">New Blog Posts</p>
              </div>
              <div className="bg-red-100 p-4 rounded-xl shadow">
                <p className="text-2xl font-bold text-red-500">💬 112</p>
                <p className="text-sm text-gray-600">New Comments</p>
              </div>
              <div className="bg-fuchsia-100 p-4 rounded-xl shadow">
                <p className="text-2xl font-bold text-fuchsia-700">💄 65</p>
                <p className="text-sm text-gray-600">New Bookings</p>
              </div>
              <div className="bg-purple-100 p-4 rounded-xl shadow">
                <p className="text-2xl font-bold text-purple-600">📝 38</p>
                <p className="text-sm text-gray-600">Profile Updates</p>
              </div>
              <div className="bg-indigo-100 p-4 rounded-xl shadow">
                <p className="text-2xl font-bold text-indigo-600">🧑‍🎤 29</p>
                <p className="text-sm text-gray-600">New Signups</p>
              </div>
              <div className="bg-pink-200 p-4 rounded-xl shadow">
                <p className="text-2xl font-bold text-pink-700">❤️ 192</p>
                <p className="text-sm text-gray-600">Post Reactions</p>
              </div>
              <div className="bg-amber-100 p-4 rounded-xl shadow">
                <p className="text-2xl font-bold text-amber-600">📩 18</p>
                <p className="text-sm text-gray-600">Contact Form Submits</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow mt-4 text-left">
              <h3 className="text-lg font-bold text-fuchsia-700 mb-3">
                🧠 Engagement Insights
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm ml-4 list-disc">
                <li>
                  ⏱️ Avg session duration: <b>5.2 mins</b>
                </li>
                <li>
                  📈 Bounce rate improved by <b>12%</b> over last week
                </li>
                <li>
                  🕔 Peak activity recorded at <b>5:00 PM IST</b>
                </li>
                <li>
                  📍 Most active cities: <b>Delhi, Mumbai, Bengaluru</b>
                </li>
                <li>
                  💬 Most engaged blog topic: <b>“Top 5 Skin Routine Tips”</b>
                </li>
              </ul>
            </div>
          </div>
        );

      case "engagement":
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-gradient-to-br from-fuchsia-200 to-fuchsia-100 p-4 rounded-xl shadow">
                <p className="text-xl font-bold text-fuchsia-700">📱 300</p>
                <p className="text-sm text-gray-700">Active Mobile Users</p>
              </div>
              <div className="bg-gradient-to-br from-pink-200 to-pink-100 p-4 rounded-xl shadow">
                <p className="text-xl font-bold text-pink-700">🖥️ 120</p>
                <p className="text-sm text-gray-700">Active Desktop Users</p>
              </div>
              <div className="bg-gradient-to-br from-purple-200 to-purple-100 p-4 rounded-xl shadow">
                <p className="text-xl font-bold text-purple-700">👁️ 850</p>
                <p className="text-sm text-gray-700">Profile Views</p>
              </div>
              <div className="bg-gradient-to-br from-violet-200 to-violet-100 p-4 rounded-xl shadow">
                <p className="text-xl font-bold text-violet-700">💘 450</p>
                <p className="text-sm text-gray-700">Blog Likes</p>
              </div>
              <div className="bg-gradient-to-br from-rose-200 to-rose-100 p-4 rounded-xl shadow">
                <p className="text-xl font-bold text-rose-700">📥 1,120</p>
                <p className="text-sm text-gray-700">Engagement Clicks</p>
              </div>
              <div className="bg-gradient-to-br from-amber-200 to-yellow-100 p-4 rounded-xl shadow">
                <p className="text-xl font-bold text-yellow-700">🚀 67%</p>
                <p className="text-sm text-gray-700">Session Success Rate</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-bold text-purple-600 mb-2 flex items-center gap-2">
                📈 User Growth Over Time
              </h3>
              <Line data={engagementGraph} />
            </div>
          </div>
        );

      case "toporders":
        return (
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Blush & Bloom", orders: 172 },
              { name: "Glow Beauty Hub", orders: 159 },
              { name: "Sparkle Studio", orders: 145 },
              { name: "PrettyNest", orders: 137 },
              { name: "Glam Goddess", orders: 130 },
            ].map((store, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl shadow border-l-4 border-pink-500"
              >
                <h3 className="font-semibold text-purple-800">{store.name}</h3>
                <p className="text-sm text-gray-600">
                  🛍️ {store.orders} Orders
                </p>
                <p className="text-xs text-gray-500">
                  Top-selling services like facial, hair spa
                </p>
              </div>
            ))}
          </div>
        );

      case "toprated":
        return (
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Elegance by Esha", rating: 4.9, reviews: 108 },
              { name: "Blush & Bloom", rating: 4.8, reviews: 97 },
              { name: "Glow Luxe Spa", rating: 4.8, reviews: 92 },
              { name: "Chic Touch Salon", rating: 4.7, reviews: 87 },
              { name: "Urban Dazzle", rating: 4.7, reviews: 79 },
            ].map((store, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl shadow border-l-4 border-fuchsia-500"
              >
                <h3 className="font-semibold text-purple-800">{store.name}</h3>
                <p className="text-sm text-gray-600">
                  ⭐ {store.rating} / 5 from {store.reviews} reviews
                </p>
                <p className="text-xs text-gray-500">
                  Popular for: Cleanliness, Staff Behaviour
                </p>
              </div>
            ))}
          </div>
        );

      case "lowrating":
        return (
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Mirror Magic", rating: 2.4, reason: "Poor hygiene" },
              { name: "StyleFix", rating: 2.5, reason: "Unprofessional staff" },
              {
                name: "GlamNGlow",
                rating: 2.6,
                reason: "Late service delivery",
              },
              {
                name: "Lush Locks",
                rating: 2.7,
                reason: "Miscommunication on pricing",
              },
              {
                name: "ColorSplash Studio",
                rating: 2.8,
                reason: "Inconsistent experience",
              },
            ].map((store, i) => (
              <div
                key={i}
                className="bg-red-50 p-4 rounded-xl shadow border-l-4 border-red-400"
              >
                <h3 className="font-semibold text-red-700">{store.name}</h3>
                <p className="text-sm text-gray-700">⭐ {store.rating} / 5</p>
                <p className="text-xs text-gray-500">
                  ⚠️ Reason: {store.reason}
                </p>
              </div>
            ))}
          </div>
        );

      case "complaints":
        return (
          <ul className="space-y-3">
            {[
              {
                user: "Riya Sharma",
                issue: "Staff arrived 20 minutes late",
                date: "May 18",
              },
              {
                user: "Neha Tiwari",
                issue: "Overcharged for bridal package",
                date: "May 20",
              },
              {
                user: "Divya Khanna",
                issue: "Improper hygiene during facial",
                date: "May 21",
              },
              {
                user: "Pallavi Sharma",
                issue: "Appointment got canceled last minute",
                date: "May 17",
              },
              {
                user: "Sneha Paul",
                issue: "Unresponsive customer service",
                date: "May 15",
              },
            ].map((item, i) => (
              <li
                key={i}
                className="bg-red-100 p-4 rounded-xl shadow border-l-4 border-red-500"
              >
                <h4 className="text-sm font-semibold text-red-700">
                  {item.user}
                </h4>
                <p className="text-sm text-gray-700">❗ {item.issue}</p>
                <p className="text-xs text-gray-500">📅 {item.date}</p>
              </li>
            ))}
          </ul>
        );

      // (All other cases: toprated, toporders, lowrating, complaints)
      // Can stay as you already wrote them. Only the header section is affected.
    }
  };

  return (
    <>
      <Header />
      <div className="pt-20 pb-20 px-4 bg-gradient-to-b from-pink-50 to-white min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* ✅ Dynamic Tab Header */}
          <div className="text-center space-y-2 mb-6">
            <h1 className="text-3xl font-extrabold text-fuchsia-700">
              {tabHeadings[activeTab].title}
            </h1>
            <p className="text-sm text-purple-600 max-w-2xl mx-auto leading-relaxed">
              {tabHeadings[activeTab].subtitle}
            </p>
          </div>

          {/* ✅ Tab Switcher */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium border transition ${
                  activeTab === tab.id
                    ? "bg-fuchsia-600 text-white shadow"
                    : "bg-white text-purple-700 border-purple-300"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow p-6 max-w-5xl mx-auto">
            {renderTab()}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
