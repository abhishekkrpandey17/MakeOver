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

const answeredData = [
  {
    question: "How to choose lipstick for dusky skin?",
    answer:
      "Go for deep reds, plums, and bronze tones. Avoid overly pale shades. Choose creamy textures for hydration and long-lasting tints for all-day wear.",
    author: "Emily White",
    likes: 67,
    dislikes: 2,
    comments: 14,
  },
  {
    question: "Best time to apply night serum?",
    answer:
      "Night serums work best after cleansing and toning, right before moisturizer. Apply between 9–11pm when your skin’s absorption rate is highest.",
    author: "Laura Adams",
    likes: 52,
    dislikes: 1,
    comments: 10,
  },
  {
    question: "Best time to apply night cream?",
    answer:
      "Night serums work best after cleansing and toning, right before moisturizer. Apply between 9–11pm when your skin’s absorption rate is highest.",
    author: "Laura Adams",
    likes: 52,
    dislikes: 1,
    comments: 10,
  },
];

const AnsweredQuestions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#fff9fe] p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-purple-900 mb-6 font-playfair">
        💡 Recently Answered
      </h2>

      <div className="space-y-4">
        {answeredData.map((item, index) => (
          <div
            key={index}
            className="bg-[#fdf4ff] border border-purple-100 rounded-xl p-5 shadow-sm transition-all duration-300"
          >
            {/* Question + Toggle Icon */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggle(index)}
            >
              <p className="text-gray-800 font-medium">{item.question}</p>
              {openIndex === index ? (
                <ChevronUp className="text-purple-600" />
              ) : (
                <ChevronDown className="text-purple-600" />
              )}
            </div>

            {/* Answer content */}
            {openIndex === index && (
              <div className="mt-4 text-sm text-gray-700 space-y-3 transition-all duration-300">
                <p>{item.answer}</p>

                <div className="flex items-center gap-2 text-purple-600">
                  <UserCircle className="w-4 h-4" />
                  <span className="text-sm">{item.author}</span>
                </div>

                <div className="flex gap-6 pt-2 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4 text-green-600" />
                    <span>{item.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsDown className="w-4 h-4 text-red-500" />
                    <span>{item.dislikes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4 text-purple-500" />
                    <span>{item.comments} comments</span>
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

export default AnsweredQuestions;
