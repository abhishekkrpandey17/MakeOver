"use client";

import { useState } from "react";

export default function UserSuggestionPage() {
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestion.trim()) return alert("Please enter a suggestion.");

    // 📨 Placeholder for API call
    console.log({ suggestion });
    alert("Thanks for your valuable suggestion! ❤️");
    setSuggestion("");
  };

  return (
    <div className="pt-10 pb-10 bg-gradient-to-br from-rose-100 to-pink-200 flex items-center justify-center py-10 px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-lg p-8">
        <h1 className="text-3xl font-bold text-pink-700 text-center mb-6">
          💬 Share Your Suggestion
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2 text-lg">
              Add Your Suggestion
            </label>
            <textarea
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              rows={6}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none focus:ring-2 focus:ring-pink-400 outline-none"
              placeholder="Write your thoughts, feedback or ideas here..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Submit
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Logged-in user suggestions only. 💖
        </p>
      </div>
    </div>
  );
}
