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
    <div className="p-6 bg-[#f6e8fb] min-h-screen">
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-full ${
            activeTab === "add" ? "bg-purple-800 text-white" : "bg-white"
          }`}
          onClick={() => setActiveTab("add")}
        >
          Add Question
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            activeTab === "activity" ? "bg-purple-800 text-white" : "bg-white"
          }`}
          onClick={() => setActiveTab("activity")}
        >
          Activity Tracker
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            activeTab === "my" ? "bg-purple-800 text-white" : "bg-white"
          }`}
          onClick={() => setActiveTab("my")}
        >
          My Questions
        </button>
      </div>
      {renderComponent()}
    </div>
  );
};

export default UserInteraction;
