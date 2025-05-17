"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  UserCircle,
} from "lucide-react";

const questions = [
  {
    question: "How to match foundation to skin tone?",
    answer:
      "To match foundation to your skin tone, swatch it along your jawline in natural light and choose the shade that disappears seamlessly. Know your undertone — warm, cool, or neutral — and choose accordingly.",
    author: "Emily White",
    likes: 42,
    dislikes: 3,
    comments: 6,
  },
  {
    question: "What’s a good SPF for oily skin?",
    answer:
      "Look for a lightweight, gel-based, non-comedogenic SPF with at least SPF 30. Products with niacinamide or matte finish are ideal for oily skin types.",
    author: "Laura Adams",
    likes: 37,
    dislikes: 1,
    comments: 4,
  },
];

const MyQuestions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#fff9fe] p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-purple-900 mb-6 font-playfair">
        📝 Your Posted Questions
      </h2>

      <div className="space-y-4">
        {questions.map((q, index) => (
          <div
            key={index}
            className="bg-[#fdf4ff] border border-purple-100 rounded-xl p-5 transition-all duration-300 shadow-sm"
          >
            {/* Question header with toggle icon */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleOpen(index)}
            >
              <p className="font-medium text-gray-800">{q.question}</p>
              {openIndex === index ? (
                <ChevronUp className="text-purple-600" />
              ) : (
                <ChevronDown className="text-purple-600" />
              )}
            </div>

            {/* Expanded answer section */}
            {openIndex === index && (
              <div className="mt-4 space-y-3 text-sm text-gray-700 transition-all duration-300">
                <p className="text-[15px] leading-relaxed">{q.answer}</p>

                <div className="flex items-center gap-2 text-purple-600">
                  <UserCircle className="w-4 h-4" />
                  <span className="text-sm">{q.author}</span>
                </div>

                <div className="flex gap-6 pt-2 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4 text-green-600" />
                    <span>{q.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsDown className="w-4 h-4 text-red-500" />
                    <span>{q.dislikes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4 text-purple-500" />
                    <span>{q.comments} comments</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyQuestions;
