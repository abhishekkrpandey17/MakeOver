/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { FaStar, FaCamera, FaPenFancy } from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../Components/Footer"; // Import Footer component

export default function AddReviewPage() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <Header />
      <div className="pb-20 pt-20 bg-gradient-to-b from-[#fce7fe] to-[#f8f0ff] py-12 px-4 flex items-center justify-center">
        <div className="w-full max-w-3xl bg-white shadow-2xl rounded-3xl p-8">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-center text-purple-700 flex items-center justify-center gap-2 mb-6">
            💖 Leave a Review
          </h1>

          {/* Star Rating */}
          <div className="mb-6 text-center">
            <p className="mb-2 text-sm text-gray-600">Your Rating</p>
            <div className="flex justify-center">
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <label key={starValue}>
                    <input
                      type="radio"
                      name="rating"
                      value={starValue}
                      onClick={() => setRating(starValue)}
                      className="hidden"
                    />
                    <FaStar
                      size={32}
                      className={`cursor-pointer transition ${
                        starValue <= (hover || rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      onMouseEnter={() => setHover(starValue)}
                      onMouseLeave={() => setHover(0)}
                    />
                  </label>
                );
              })}
            </div>
          </div>

          {/* Review Text */}
          <label className="block text-sm text-gray-600 font-medium mb-1 flex items-center gap-2">
            <FaPenFancy /> Your Experience
          </label>
          <textarea
            rows={5}
            placeholder="Write something lovely about your visit..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
          />

          {/* Image Upload */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-600 flex items-center gap-2">
              <FaCamera /> Upload a Photo (optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-pink-100 file:text-pink-700 hover:file:bg-pink-200"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-3 w-28 h-28 object-cover rounded-xl border shadow"
              />
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={() => alert("Review submitted (mock)")}
            className="w-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-semibold py-3 rounded-full shadow-md hover:shadow-lg transition"
          >
            Submit Review
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
