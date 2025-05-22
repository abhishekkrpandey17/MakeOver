"use client";

import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import { useState } from "react";

export default function StoreSuggestionPage() {
  const [formData, setFormData] = useState({
    storeName: "",
    suggestion: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.storeName.trim() || !formData.suggestion.trim()) {
      return alert("Please fill out all fields.");
    }

    console.log(formData); // Replace with API call
    alert("Thanks for your suggestion, dear store! 🛍️");
    setFormData({ storeName: "", suggestion: "" });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-fuchsia-100 to-rose-200 flex items-center justify-center py-10 px-4">
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-lg p-8">
          <h1 className="text-3xl font-bold text-pink-700 text-center mb-6">
            🛍️ Store Suggestion Box
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* <div>
      <label className="block text-gray-700 font-medium mb-2 text-lg">
        Store Name
      </label>
      <input
        type="text"
        name="storeName"
        value={formData.storeName}
        onChange={handleChange}
        placeholder="e.g., GlamBliss Beauty Hub"
        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none"
      />
    </div> */}

            <div>
              <label className="block text-gray-700 font-medium mb-2 text-lg">
                Your Suggestion
              </label>
              <textarea
                name="suggestion"
                value={formData.suggestion}
                onChange={handleChange}
                rows={6}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none focus:ring-2 focus:ring-pink-400 outline-none"
                placeholder="Share your ideas to improve features, services, or anything else..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-xl transition"
            >
              Submit Suggestion
            </button>
          </form>

          <p className="text-sm text-center text-gray-500 mt-6">
            For verified store partners only 💼
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
