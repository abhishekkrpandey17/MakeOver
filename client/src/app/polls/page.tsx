"use client";
import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const featuredPoll = {
  question: "📝 Which topic should Priya Sharma write about next?",
  author: "Priya Sharma",
  options: [
    "Monsoon Skincare Routine",
    "Minimal Office Makeup Look",
    "Nighttime Anti-Ageing Tips",
    "Lipstick Hacks for All Skin Tones",
  ],
  results: {
    "Monsoon Skincare Routine": 30,
    "Minimal Office Makeup Look": 18,
    "Nighttime Anti-Ageing Tips": 36,
    "Lipstick Hacks for All Skin Tones": 16,
  },
};

const polls = [
  {
    question: "💧 What’s your go-to daily skincare essential?",
    icon: "🧴",
    correct: "Sunscreen",
    options: ["Moisturizer", "Sunscreen", "Serum", "Face Wash"],
    results: { Moisturizer: 18, Sunscreen: 52, Serum: 20, "Face Wash": 10 },
  },
  {
    question: "💄 Which makeup trend do you love most right now?",
    icon: "✨",
    correct: "Glowy Skin",
    options: ["Bold Lips", "Graphic Eyeliner", "Glowy Skin", "No-Makeup Look"],
    results: {
      "Bold Lips": 22,
      "Graphic Eyeliner": 16,
      "Glowy Skin": 48,
      "No-Makeup Look": 14,
    },
  },
];

export default function Page() {
  const [answers, setAnswers] = useState<{ [index: number]: string }>({});
  const [topAnswer, setTopAnswer] = useState<string | null>(null);

  const totalTopVotes = Object.values(featuredPoll.results).reduce(
    (a, b) => a + b,
    0
  );

  return (
    <>
      <Header />

      <section className="min-h-screen bg-[#f3e8ff] py-16 px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-purple-800 flex items-center justify-center gap-2">
            📊 Beauty Community Polls
          </h1>
          <p className="text-purple-700 mt-4 text-lg">
            Cast your vote & shape the content you want to see. Our authors are
            waiting for your input! 💅✨
          </p>
        </div>

        {/* 🔝 Featured Community Topic Vote */}
        <div className="bg-white p-6 rounded-2xl shadow-xl max-w-4xl mx-auto mb-16">
          <h2 className="text-xl font-semibold text-purple-900 mb-2">
            {featuredPoll.question}
          </h2>
          <p className="text-sm text-purple-600 mb-4">
            Author: <strong>{featuredPoll.author}</strong>
          </p>
          <div className="space-y-3">
            {featuredPoll.options.map((option) => {
              const percent = Math.round(
                (featuredPoll.results[
                  option as keyof typeof featuredPoll.results
                ] /
                  totalTopVotes) *
                  100
              );
              return (
                <button
                  key={option}
                  onClick={() => setTopAnswer(option)}
                  className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                    topAnswer
                      ? topAnswer === option
                        ? "bg-pink-100 border-pink-500 text-pink-800"
                        : "bg-purple-50 border-gray-200 text-gray-600"
                      : "bg-purple-100 hover:bg-purple-200 text-purple-800 border-purple-300"
                  }`}
                  disabled={!!topAnswer}
                >
                  <div className="flex justify-between font-medium mb-1">
                    <span>{option}</span>
                    {topAnswer && <span>{percent}%</span>}
                  </div>
                  {topAnswer && (
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-2 bg-pink-500 rounded-full transition-all duration-300"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
          {topAnswer && (
            <p className="text-purple-700 text-sm mt-3">
              💡 You voted for: <strong>{topAnswer}</strong>
            </p>
          )}
        </div>

        {/* 🧠 Regular Polls With Correct/Incorrect Feedback */}
        <div className="max-w-4xl mx-auto space-y-12">
          {polls.map((poll, idx) => {
            const totalVotes = Object.values(poll.results).reduce(
              (a, b) => a + b,
              0
            );
            const userAnswer = answers[idx];

            return (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-xl font-semibold text-purple-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">{poll.icon}</span> {poll.question}
                </h2>

                <div className="space-y-3">
                  {poll.options.map((option) => {
                    const percentage = Math.round(
                      ((poll.results[option as keyof typeof poll.results] ??
                        0) /
                        totalVotes) *
                        100
                    );
                    const isSelected = userAnswer === option;
                    const isCorrect = poll.correct === option;

                    return (
                      <button
                        key={option}
                        onClick={() =>
                          !userAnswer &&
                          setAnswers({ ...answers, [idx]: option })
                        }
                        className={`w-full text-left px-4 py-3 rounded-lg border transition-all
                          ${
                            userAnswer
                              ? isSelected
                                ? isCorrect
                                  ? "bg-green-100 border-green-500 text-green-800"
                                  : "bg-red-100 border-red-500 text-red-700"
                                : "bg-purple-50 border-gray-200 text-gray-600"
                              : "bg-purple-100 hover:bg-purple-200 text-purple-800 border-purple-300"
                          }`}
                        disabled={!!userAnswer}
                      >
                        <div className="flex justify-between font-medium mb-1">
                          <span>{option}</span>
                          {userAnswer && <span>{percentage}%</span>}
                        </div>
                        {userAnswer && (
                          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-2 rounded-full transition-all duration-300 ${
                                isCorrect
                                  ? "bg-green-500"
                                  : isSelected
                                  ? "bg-red-500"
                                  : "bg-purple-400"
                              }`}
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {userAnswer && (
                  <p
                    className={`mt-4 text-sm font-medium ${
                      userAnswer === poll.correct
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {userAnswer === poll.correct
                      ? "🎉 Correct choice!"
                      : `❌ Correct answer: ${poll.correct}`}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}
