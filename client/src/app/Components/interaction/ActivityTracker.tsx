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
    <div className="bg-[#fff9fe] p-8 rounded-3xl shadow-2xl max-w-4xl mx-auto">
      <h2 className="text-3xl font-playfair text-purple-900 font-semibold mb-6 text-center">
        🌷 Your Beauty Journey So Far
      </h2>

      <div className="grid gap-6">
        {/* Liked Answers */}
        <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#fdf4ff] to-[#fbe9fc] border border-purple-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="bg-white p-2 rounded-full shadow text-pink-500">
            <Heart className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[17px] font-semibold text-gray-800 mb-1">
              💗 You liked 5 answers
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {likedAnswers.map((answer, index) => (
                <li key={index}>{answer}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Commented Threads */}
        <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#fdf4ff] to-[#ede5fb] border border-purple-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="bg-white p-2 rounded-full shadow text-purple-500">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[17px] font-semibold text-gray-800 mb-1">
              💬 You commented on 3 threads
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {commentedThreads.map((thread, index) => (
                <li key={index}>{thread}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Posted Questions */}
        <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#fdf4ff] to-[#e3e7fd] border border-purple-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="bg-white p-2 rounded-full shadow text-indigo-500">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[17px] font-semibold text-gray-800 mb-1">
              ❓ You posted 2 questions
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {postedQuestions.map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityTracker;
