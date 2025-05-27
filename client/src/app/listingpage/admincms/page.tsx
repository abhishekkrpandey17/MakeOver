"use client";

import { useState } from "react";
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
import ComplaintsPage from "../components/ComplaintsPage";
import BusinessVerificationList from "../components/BusinessVerifcationList";
import AdminSentimentDashboard from "../components/UserSentiment";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

const tabs = [
  { id: "activity", label: "User Activity" },
  { id: "engagement", label: "Engagement Dashboard" },
  { id: "toprated", label: "Top Rated Stores" },
  { id: "toporders", label: "Top Orders Stores" },
  { id: "lowrating", label: "Low Rating Stores" },
  { id: "complaints", label: "Complaints" },
  { id: "Flagged", label: "Flagged Businesses" },
  { id: "Business Verification", label: "Business Verification" },
  { id: "User Sentiment", label: "User Sentiment" },
];

const tabHeadings = {
  activity: {
    title: "User Activity Dashboard",
    subtitle:
      "Monitor real-time user engagement across logins, content, and interactions to optimize platform performance.",
  },
  engagement: {
    title: "Engagement Analytics",
    subtitle:
      "Visualize trends in user behavior, sessions, and content performance to drive strategic decisions.",
  },
  toprated: {
    title: "Top Rated Stores",
    subtitle:
      "Explore the highest-rated service providers trusted and loved by our community.",
  },
  toporders: {
    title: "Top Orders Performance",
    subtitle:
      "Track stores receiving the most bookings — a sign of excellent service and trust.",
  },
  lowrating: {
    title: "Low Rating Alerts",
    subtitle:
      "Identify underperforming stores and address user feedback to improve experiences.",
  },
  complaints: {
    title: "User Complaints",
    subtitle:
      "Review issues raised by users to ensure service quality and maintain community trust.",
  },
  Flagged: {
    title: "Flagged Businesses",
    subtitle: "Review and manage businesses flagged for review.",
  },
  "Business Verification": {
    title: "Business Verification",
    subtitle: "Approve or reject pending business verification requests.",
  },
  "User Sentiment": {
    title: "User Sentiment Analysis",
    subtitle: "Analyze user feedback and sentiment trends on the platform.",
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
  const [activeTab, setActiveTab] = useState<keyof typeof tabHeadings>(
    "activity"
  );

  const renderTab = () => {
    switch (activeTab) {
      case "activity":
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="bg-rose-100 p-4 rounded-xl shadow">
                <p className="text-2xl font-bold text-rose-600">320</p>
                <p className="text-sm text-gray-600">Users Logged In</p>
              </div>
              <div className="bg-pink-100 p-4 rounded-xl shadow">
                <p className="text-2xl font-bold text-pink-600">45</p>
                <p className="text-sm text-gray-600">New Blog Posts</p>
              </div>
              <div className="bg-red-100 p-4 rounded-xl shadow">
                <p className="text-2xl font-bold text-red-500">112</p>
                <p className="text-sm text-gray-600">New Comments</p>
              </div>
              <div className="bg-fuchsia-100 p-4 rounded-xl shadow">
                <p className="text-2xl font-bold text-fuchsia-700">65</p>
                <p className="text-sm text-gray-600">New Bookings</p>
              </div>
              <div className="bg-purple-100 p-4 rounded-xl shadow">
                <p className="text-2xl font-bold text-purple-600">38</p>
                <p className="text-sm text-gray-600">Profile Updates</p>
              </div>
              <div className="bg-indigo-100 p-4 rounded-xl shadow">
                <p className="text-2xl font-bold text-indigo-600">29</p>
                <p className="text-sm text-gray-600">New Signups</p>
              </div>
              <div className="bg-pink-200 p-4 rounded-xl shadow">
                <p className="text-2xl font-bold text-pink-700">192</p>
                <p className="text-sm text-gray-600">Post Reactions</p>
              </div>
              <div className="bg-amber-100 p-4 rounded-xl shadow">
                <p className="text-2xl font-bold text-amber-600">18</p>
                <p className="text-sm text-gray-600">Contact Form Submits</p>
              </div>
            </div>
          </div>
        );

      case "engagement":
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-gradient-to-br from-fuchsia-200 to-fuchsia-100 p-4 rounded-xl shadow">
                <p className="text-xl font-bold text-fuchsia-700">300</p>
                <p className="text-sm text-gray-700">Active Mobile Users</p>
              </div>
              <div className="bg-gradient-to-br from-pink-200 to-pink-100 p-4 rounded-xl shadow">
                <p className="text-xl font-bold text-pink-700">120</p>
                <p className="text-sm text-gray-700">Active Desktop Users</p>
              </div>
              <div className="bg-gradient-to-br from-purple-200 to-purple-100 p-4 rounded-xl shadow">
                <p className="text-xl font-bold text-purple-700">850</p>
                <p className="text-sm text-gray-700">Profile Views</p>
              </div>
              <div className="bg-gradient-to-br from-violet-200 to-violet-100 p-4 rounded-xl shadow">
                <p className="text-xl font-bold text-violet-700">450</p>
                <p className="text-sm text-gray-700">Blog Likes</p>
              </div>
              <div className="bg-gradient-to-br from-rose-200 to-rose-100 p-4 rounded-xl shadow">
                <p className="text-xl font-bold text-rose-700">1,120</p>
                <p className="text-sm text-gray-700">Engagement Clicks</p>
              </div>
              <div className="bg-gradient-to-br from-amber-200 to-yellow-100 p-4 rounded-xl shadow">
                <p className="text-xl font-bold text-yellow-700">67%</p>
                <p className="text-sm text-gray-700">Session Success Rate</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-bold text-purple-600 mb-2">
                User Growth Over Time
              </h3>
              <Line data={engagementGraph} />
            </div>
          </div>
        );

      case "toporders":
        return (
          <div className="p-4">
            <p className="text-center text-gray-500">
              Top Orders Stores content
            </p>
          </div>
        );

      case "toprated":
        return (
          <div className="p-4">
            <p className="text-center text-gray-500">
              Top Rated Stores content
            </p>
          </div>
        );

      case "lowrating":
        return (
          <div className="p-4">
            <p className="text-center text-gray-500">
              Low Rating Stores content
            </p>
          </div>
        );

      case "complaints":
        return <ComplaintsPage />;

      case "Flagged":
        return (
          <div className="p-4">
            <p className="text-center text-gray-500">
              Flagged Businesses management content
            </p>
          </div>
        );

      case "Business Verification":
        return <BusinessVerificationList />;

      case "User Sentiment":
        return <AdminSentimentDashboard />;

      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="pt-20 pb-20 px-4 bg-gradient-to-b from-pink-50 to-white min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-2 mb-6">
            <h1 className="text-3xl font-extrabold text-fuchsia-700">
              {tabHeadings[activeTab].title}
            </h1>
            <p className="text-sm text-purple-600 max-w-2xl mx-auto leading-relaxed">
              {tabHeadings[activeTab].subtitle}
            </p>
          </div>

          {/* Mobile dropdown */}
          <div className="flex justify-center mb-4 md:hidden">
            <select
              value={activeTab}
              onChange={(e) =>
                setActiveTab(e.target.value as keyof typeof tabHeadings)
              }
              className="px-4 py-2 rounded-lg border border-purple-300 text-purple-700 bg-white shadow focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            >
              {tabs.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.label}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop pill buttons */}
          <div className="hidden md:flex flex-wrap justify-center gap-3 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as keyof typeof tabHeadings)}
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

          <div className="bg-white rounded-2xl shadow p-6 max-w-5xl mx-auto">
            {renderTab()}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
