"use client";
import React from "react";
import { Heart, MessageCircle, HelpCircle } from "lucide-react";

const ActivityTracker = () => {
  const likedAnswers = [
    "How to match foundation to your undertone?",
    "Top 5 waterproof mascaras ranked",
    "Tips for long-lasting matte lipstick",
  ];

  const commentedThreads = [
    "Night vs Day serums: What’s better?",
    "Should we double cleanse every day?",
    "Best sunscreens under ₹1000",
  ];

  const postedQuestions = [
    "Is Vitamin C safe to use with Niacinamide?",
    "How to choose the right concealer shade?",
  ];

  return (
    <div className="bg-[#fff9fe] p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-purple-900 mb-6 font-playfair">
        💖 Your Beauty Journey So Far
      </h2>

      {/* Liked Answers */}
      <div className="flex items-start gap-4 p-5 bg-[#fdf4ff] border border-purple-100 rounded-xl hover:shadow-md transition duration-300 mb-4">
        <Heart className="text-pink-500 mt-1" />
        <div>
          <p className="text-lg font-medium text-gray-800">
            You liked 5 answers
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-600">
            {likedAnswers.map((answer, index) => (
              <li key={index}>{answer}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Commented Threads */}
      <div className="flex items-start gap-4 p-5 bg-[#fdf4ff] border border-purple-100 rounded-xl hover:shadow-md transition duration-300 mb-4">
        <MessageCircle className="text-purple-500 mt-1" />
        <div>
          <p className="text-lg font-medium text-gray-800">
            You commented on 3 threads
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-600">
            {commentedThreads.map((thread, index) => (
              <li key={index}>{thread}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Posted Questions */}
      <div className="flex items-start gap-4 p-5 bg-[#fdf4ff] border border-purple-100 rounded-xl hover:shadow-md transition duration-300">
        <HelpCircle className="text-indigo-500 mt-1" />
        <div>
          <p className="text-lg font-medium text-gray-800">
            You posted 2 questions
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-600">
            {postedQuestions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActivityTracker;
