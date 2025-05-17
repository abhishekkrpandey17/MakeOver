"use client";
import React, { useState } from "react";
import AnsweredQuestions from "./AnsweredQuestion";
import AuthorActivity from "./AuthorActivity";
import PostPoll from "./PostPoll";

const AuthorInteraction = () => {
  const [activeTab, setActiveTab] = useState("answered");

  const renderComponent = () => {
    switch (activeTab) {
      case "answered":
        return <AnsweredQuestions />;
      case "activity":
        return <AuthorActivity />;
      case "poll":
        return <PostPoll />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-[#f6e8fb] pb-32 ">
      {/* Header Message */}
      <div className="text-center mb-8 mt-10">
        <h2 className="text-3xl font-playfair font-semibold text-purple-900">
          💬 Hello, beauty expert!
        </h2>
        <p className="text-md text-gray-600 mt-2">
          Engage with your audience, track your insights, and spark
          conversations ✨
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-full ${
            activeTab === "answered" ? "bg-purple-800 text-white" : "bg-white"
          }`}
          onClick={() => setActiveTab("answered")}
        >
          Answered Questions
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            activeTab === "activity" ? "bg-purple-800 text-white" : "bg-white"
          }`}
          onClick={() => setActiveTab("activity")}
        >
          Recent Activity
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            activeTab === "poll" ? "bg-purple-800 text-white" : "bg-white"
          }`}
          onClick={() => setActiveTab("poll")}
        >
          Post a Poll
        </button>
      </div>

      {renderComponent()}
    </div>
  );
};

export default AuthorInteraction;
