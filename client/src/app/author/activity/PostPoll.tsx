"use client";
import React, { useState } from "react";

const PostPoll = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  return (
    <div className="bg-[#fff9fe] p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-purple-900 mb-4 font-playfair">
        📢 Post a New Poll
      </h2>
      <input
        type="text"
        placeholder="Enter your poll question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full mb-4 p-3 rounded-xl border border-purple-200 focus:ring-purple-400 focus:border-purple-400"
      />
      {options.map((opt, idx) => (
        <input
          key={idx}
          type="text"
          placeholder={`Option ${idx + 1}`}
          value={opt}
          onChange={(e) => handleOptionChange(idx, e.target.value)}
          className="w-full mb-2 p-3 rounded-xl border border-purple-100"
        />
      ))}
      <button
        className="bg-purple-700 text-white px-4 py-2 rounded-full mt-2"
        onClick={addOption}
      >
        + Add Option
      </button>
    </div>
  );
};

export default PostPoll;
