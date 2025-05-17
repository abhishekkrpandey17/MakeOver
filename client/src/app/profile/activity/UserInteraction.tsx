"use client";
import React, { useState } from "react";
import AddQuestion from "./AddQuestion";
import ActivityTracker from "./ActivityTracker";
import MyQuestions from "./MyQuestions";

const UserInteraction = () => {
  const [activeTab, setActiveTab] = useState("add");

  const renderComponent = () => {
    switch (activeTab) {
      case "add":
        return <AddQuestion />;
      case "activity":
        return <ActivityTracker />;
      case "my":
        return <MyQuestions />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-[#f6e8fb] pb-32 min-h-screen">
      {/* 🎀 Header Message */}
      <div className="text-center mb-8 mt-10">
        <h2 className="text-3xl font-playfair font-semibold text-purple-900">
          💖 Welcome back, beauty insider!
        </h2>
        <p className="text-md text-gray-600 mt-2">
          Track your questions, feedback, and growth in the community ✨
        </p>
      </div>

      {/* Nav Switcher */}
      <div className="mt-10 flex justify-center gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-full  ${
            activeTab === "add" ? "bg-purple-800 text-white" : "bg-white"
          }`}
          onClick={() => setActiveTab("add")}
        >
          Add Query
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            activeTab === "activity" ? "bg-purple-800 text-white" : "bg-white"
          }`}
          onClick={() => setActiveTab("activity")}
        >
          Activity
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            activeTab === "my" ? "bg-purple-800 text-white" : "bg-white"
          }`}
          onClick={() => setActiveTab("my")}
        >
          My Queries
        </button>
      </div>

      {renderComponent()}
    </div>
  );
};

export default UserInteraction;
