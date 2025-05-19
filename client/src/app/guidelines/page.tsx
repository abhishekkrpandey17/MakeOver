"use client";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const rules = [
  {
    title: "Respect Everyone",
    desc: "Treat all members with kindness. Harassment, hate speech, or personal attacks will not be tolerated.",
    icon: "🤝",
  },
  {
    title: "Stay On Topic",
    desc: "Post only in relevant categories. Avoid spamming or derailing discussions with unrelated content.",
    icon: "📌",
  },
  {
    title: "No Promotions or Ads",
    desc: "This is a community space—not a marketplace. Avoid self-promotion unless explicitly allowed.",
    icon: "🚫",
  },
  {
    title: "Use Clear Language",
    desc: "Communicate clearly and constructively. Avoid all caps, slang, or excessive emojis.",
    icon: "📝",
  },
  {
    title: "Report Responsibly",
    desc: "Flag posts that violate guidelines. Do not misuse the report button.",
    icon: "⚠️",
  },
];

export default function CommunityGuidelines() {
  return (
    <>
      <Header />
      <section className="min-h-screen bg-[#f3e8ff] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-800 mb-4">
            📋 Community Guidelines
          </h2>
          <p className="text-purple-700 text-lg">
            To keep our beauty community safe, inclusive, and fun—please follow
            these simple guidelines:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {rules.map((rule, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="text-3xl mb-2">{rule.icon}</div>
              <h3 className="text-lg font-semibold text-purple-900 mb-1">
                {rule.title}
              </h3>
              <p className="text-sm text-gray-700">{rule.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
