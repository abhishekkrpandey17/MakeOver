"use client";
import React, { useState } from "react";

const AddQuestion = () => {
  const [question, setQuestion] = useState("");

  return (
    <div className="bg-[#fff9fe] mt-10 p-8 rounded-2xl shadow-xl max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-purple-900 mb-6 font-playfair">
        ✨ Ask a New Question
      </h2>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full h-40 p-4 rounded-xl border-2 border-purple-100 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-300 transition-all duration-300 bg-[#fdf4ff] placeholder:text-gray-400 text-gray-800"
        placeholder="What's your question? Start with something clear and specific..."
      />

      <div className="flex justify-end">
        <button
          className="mt-6 bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-800 hover:to-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300"
          onClick={() => alert(`Submitted: ${question}`)}
        >
          Submit Question
        </button>
      </div>
    </div>
  );
};

export default AddQuestion;
