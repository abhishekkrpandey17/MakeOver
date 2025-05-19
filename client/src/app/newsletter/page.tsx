"use client";
import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Page() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <>
      <Header />
      <section className="min-h-screen bg-[#f3e8ff] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-purple-800 mb-4 flex justify-center gap-2">
            📰 Subscribe to the MakeOver Newsletter
          </h1>
          <p className="text-purple-700 mb-6 text-lg">
            Stay ahead with beauty insights, skincare routines, hot trends, and
            exclusive deals delivered every Friday ✨
            <br />
            Join over <strong>10,000+ glow-getters</strong> across India 💜
          </p>

          {/* Subscription Input */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-3 rounded-md border w-full sm:w-96 focus:outline-none focus:ring-2 ring-purple-400 text-sm"
            />
            <button
              onClick={handleSubscribe}
              className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-md transition"
            >
              Subscribe
            </button>
          </div>
          {subscribed && (
            <p className="mt-4 text-green-600 font-medium flex justify-center items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-500" /> You’ve
              successfully subscribed!
            </p>
          )}
        </div>

        {/* 📦 Why Subscribe */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-semibold text-purple-800 mb-4 text-center">
            🌷 What You’ll Get
          </h3>
          <ul className="grid sm:grid-cols-2 gap-6 text-purple-700 text-sm">
            <li className="bg-white p-4 rounded-xl shadow-md">
              💄 Weekly makeup tips from expert artists
            </li>
            <li className="bg-white p-4 rounded-xl shadow-md">
              🌸 Skin-friendly product reviews & hacks
            </li>
            <li className="bg-white p-4 rounded-xl shadow-md">
              🎀 Special discount codes from our partner brands
            </li>
            <li className="bg-white p-4 rounded-xl shadow-md">
              🧴 Seasonal skincare checklists + guides
            </li>
          </ul>
        </div>

        {/* Optional: Past Issues */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <h4 className="text-xl font-bold text-purple-900 mb-3">
            📚 Peek Inside Past Issues
          </h4>
          <p className="text-purple-600 text-sm mb-6">
            Here’s what you missed last month:
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-left text-sm text-purple-800">
            <div className="bg-white p-4 rounded-lg shadow">
              💫 “5-Step Dewy Skin Routine That Actually Works”
              <br />
              <span className="text-xs text-gray-400">April 5, 2024</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              💋 “Top 3 Lipstick Shades Loved by the Community”
              <br />
              <span className="text-xs text-gray-400">April 12, 2024</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              🧴 “Sensitive Skin SOS: What to Use & Avoid”
              <br />
              <span className="text-xs text-gray-400">April 19, 2024</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
