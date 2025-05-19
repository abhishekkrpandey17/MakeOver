"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Page() {
  const [copied, setCopied] = useState(false);
  const referralCode = "MAKEOVER123";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Header />
      <section className="min-h-screen bg-[#f3e8ff] py-16 px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-purple-900 mb-4">
            💜 Refer & Earn Rewards with MakeOver!
          </h1>
          <p className="text-lg text-purple-700">
            Share the glow! Invite friends to join the beauty revolution and
            earn exclusive perks with every successful referral 💅
          </p>
        </motion.div>

        {/* Referral Code Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white shadow-xl rounded-xl max-w-xl mx-auto p-6 text-center mb-16"
        >
          <p className="text-lg text-purple-800 mb-2 font-semibold">
            Your Referral Code:
          </p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-md font-mono tracking-wider">
              {referralCode}
            </span>
            <button
              onClick={handleCopy}
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Share with your friends and start earning!
          </p>
        </motion.div>

        {/* How It Works */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-16">
          {[
            {
              icon: "👯",
              title: "Invite Friends",
              desc: "Send your unique referral code to friends and family.",
            },
            {
              icon: "📝",
              title: "They Sign Up",
              desc: "They join the MakeOver platform using your code.",
            },
            {
              icon: "🎁",
              title: "You Both Earn",
              desc: "You get rewards once they post or book a service!",
            },
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-md text-center"
            >
              <div className="text-4xl mb-3">{step.icon}</div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Rewards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-purple-800 mb-2">
            💸 What You Earn
          </h2>
          <p className="text-purple-700 max-w-xl mx-auto">
            Earn ₹100 in wallet credit for each successful referral. Your friend
            gets ₹50 off their first booking. It’s a win-win!
          </p>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}
