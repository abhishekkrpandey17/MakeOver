"use client";

import { useState } from "react";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";
import {
  HeartIcon,
  ClockIcon,
  CalendarDaysIcon,
  GiftIcon,
  XCircleIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";
import { Angry } from "lucide-react";
import ComplaintsUser from "../../components/ComplaintsUser";
import MyBusinessStatus from "../../components/MyBusinessStatus";
import UserSuggestionPage from "../../components/UserSuggestionsPage";

const favourites = [
  { name: "Glamour Glow Studio", location: "Kolkata", rating: 4.8 },
  { name: "Blush & Bloom", location: "Mumbai", rating: 4.6 },
];

const previous = [
  {
    name: "Lotus Touch Spa",
    service: "Body Wrap",
    date: "May 4, 2025",
    status: "Completed",
  },
];

const upcoming = [
  {
    name: "Mirror Magic",
    service: "Hair Spa",
    date: "May 25, 2025",
    time: "2:00 PM",
    status: "Confirmed",
  },
];

const offers = [
  {
    title: "₹500 OFF Monsoon Facial",
    expires: "June 10, 2025",
    code: "MONSOON500",
  },
];

const cancelled = [
  {
    name: "The Beauty Bar",
    service: "Makeup Trial",
    cancelledOn: "May 18, 2025",
    reason: "Client No Show",
  },
];

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const tabs = [
    { id: "favourites", name: "Favourite", icon: HeartIcon },
    { id: "previous", name: "Previous Bookings", icon: ClockIcon },
    { id: "upcoming", name: "Upcoming Bookings", icon: CalendarDaysIcon },
    { id: "offers", name: "My Offers", icon: GiftIcon },
    { id: "cancelled", name: "Cancelled", icon: XCircleIcon },
    { id: "complaints", name: "complaints", icon: Angry },
    { id: "suggestions", name: "sugestions", icon: IdentificationIcon },
    { id: "status", name: "status", icon: XCircleIcon },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "favourites":
        return (
          <div className="space-y-4">
            {favourites.map((fav, i) => (
              <div
                key={i}
                className="p-4 border border-purple-200 rounded-xl shadow-sm flex justify-between items-center bg-white"
              >
                <div>
                  <h3 className="text-purple-800 font-semibold">{fav.name}</h3>
                  <p className="text-sm text-gray-500">{fav.location}</p>
                </div>
                <span className="text-sm text-yellow-500">⭐ {fav.rating}</span>
              </div>
            ))}
          </div>
        );
      case "previous":
        return (
          <div className="space-y-4">
            {previous.map((item, i) => (
              <div
                key={i}
                className="p-4 border border-purple-200 rounded-xl shadow-sm bg-white"
              >
                <h3 className="font-semibold text-purple-800">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  {item.service} on {item.date}
                </p>
                <span className="text-xs text-green-600">{item.status}</span>
              </div>
            ))}
          </div>
        );
      case "upcoming":
        return (
          <div className="space-y-4">
            {upcoming.map((item, i) => (
              <div
                key={i}
                className="p-5 border border-purple-300 rounded-xl shadow bg-white flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg font-semibold text-purple-800">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.service} • {item.date} • {item.time}
                  </p>
                  <span className="text-xs text-blue-600">{item.status}</span>
                </div>
                <button className="px-4 py-1 text-sm bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition font-medium">
                  Cancel
                </button>
              </div>
            ))}
          </div>
        );
      case "offers":
        return (
          <div className="space-y-4">
            {offers.map((item, i) => (
              <div
                key={i}
                className="p-4 border border-purple-200 rounded-xl shadow-sm bg-pink-50"
              >
                <h3 className="font-semibold text-purple-800">{item.title}</h3>
                <p className="text-sm text-gray-500">
                  Valid until: {item.expires}
                </p>
                <p className="text-sm font-mono text-purple-700">
                  Promo Code: <span className="font-bold">{item.code}</span>
                </p>
              </div>
            ))}
          </div>
        );
      case "cancelled":
        return (
          <div className="space-y-4">
            {cancelled.map((item, i) => (
              <div
                key={i}
                className="p-5 border border-red-300 rounded-xl shadow bg-white"
              >
                <h3 className="text-lg font-semibold text-red-600">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.service} • Cancelled on {item.cancelledOn}
                </p>
                <p className="text-xs text-red-400 italic">
                  Reason: {item.reason}
                </p>
              </div>
            ))}
          </div>
        );

      case "complaints": {
        return <ComplaintsUser />;
      }

      case "status": {
        return <MyBusinessStatus />;
      }

      case "suggestions": {
        return <UserSuggestionPage />;
      }
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-[#fbe4ff] to-white pt-10 pb-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-purple-800 mb-2">
            Your Beauty Journey 🌸
          </h1>
          <p className="text-sm text-gray-600 mb-8 max-w-xl mx-auto">
            Manage your salon bookings, discover offers, and keep your faves
            close. Here’s your personalized hub to glow effortlessly!
          </p>

          {/* Tab Switcher */}
          <div className="flex justify-center flex-wrap gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === tab.id
                    ? "bg-purple-600 text-white shadow"
                    : "bg-white border border-purple-300 text-purple-600"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.name}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-white p-6 rounded-2xl shadow max-w-3xl mx-auto text-left">
            {renderContent()}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
