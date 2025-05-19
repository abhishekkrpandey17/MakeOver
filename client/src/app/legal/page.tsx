"use client";
import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const sections = {
  disclaimer: {
    title: "⚠️ Disclaimer",
    content: `
📌 Introduction
Welcome to MakeOver! 🌸 Our goal is to create a space that inspires confidence and educates users on beauty routines, trends, and lifestyle. We believe in transparency and shared wisdom—but also encourage safe beauty practices.

🧾 Overview
The advice on this platform is contributed by community members, influencers, or content curators. It is meant for general use and exploration—not as a substitute for licensed dermatological, medical, or psychological care.

💡 Note:
- Always patch test new products
- Consult a licensed expert for medical concerns
- Read labels and check expiry dates

🌼 Reminder: Your skin is unique. Take care accordingly 💖
    `,
  },
  privacy: {
    title: "🔐 Privacy Policy",
    content: `
📌 Introduction
At MakeOver, we respect your glow *and* your data privacy 💁‍♀️. This document outlines how your data is used, stored, and protected.

🧾 What We Collect
- 📧 Email, Name, Profile Pic (optional)
- 💬 Content you post (questions, replies)
- 💖 Likes, bookmarks, reading behavior
- 📲 Device/browser info for security

🎯 Why We Collect It
- To personalize your feed & suggestions
- To notify you of replies or updates
- To help us improve our platform

🧠 Your Control:
- Edit or delete your account any time
- Opt out of newsletter emails
- Contact us for a data export

🌷 We store data securely and never sell it. Promise 💝
    `,
  },
  terms: {
    title: "📜 Terms & Conditions",
    content: `
📌 Introduction
These Terms of Use govern your access and participation on MakeOver. Please read them before posting or creating a profile.

🧾 User Responsibilities
By using MakeOver, you agree to:
- Be respectful to all users 💞
- Refrain from bullying, spam, or hate speech ❌
- Not misuse the voting or reporting features ⚠️
- Use only real and original content 🌟

🧠 Community Etiquette
- Celebrate diversity in beauty
- Credit creators when reposting
- Avoid misinformation

💬 Moderation Policy
Admins/mods may:
- Remove harmful content without warning
- Suspend accounts after violations
- Review complaints fairly and respectfully

🌐 Legal & Compliance
MakeOver complies with:
- GDPR & global privacy laws
- COPPA (users 13+ or with parental consent)
- DMCA takedown guidelines

💅 Your continued use = agreement to all terms.
Let’s build something beautiful together 💖
    `,
  },
};

export default function Page() {
  const [active, setActive] = useState<keyof typeof sections>("disclaimer");

  return (
    <>
      <Header />
      <section className="min-h-screen bg-[#f3e8ff] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-800 text-center mb-4">
            🧾 Help, Privacy & Community Guidelines
          </h2>
          <p className="text-center text-purple-700 max-w-2xl mx-auto text-lg mb-10">
            Welcome to your beauty sanctuary 💖 — a space where trust,
            transparency, and respect bloom together. Here you’ll find
            everything from legal disclaimers and privacy promises.
          </p>

          {/* Tab Buttons */}
          <div className="flex gap-4 justify-center mb-8 flex-wrap">
            {Object.keys(sections).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key as keyof typeof sections)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  active === key
                    ? "bg-purple-700 text-white"
                    : "bg-white text-purple-800 border border-purple-300 hover:bg-purple-100"
                }`}
              >
                {sections[key as keyof typeof sections].title}
              </button>
            ))}
          </div>

          {/* Content Display */}
          <div className="bg-white p-6 rounded-xl shadow-xl text-purple-900 leading-relaxed whitespace-pre-line text-sm sm:text-base">
            <h3 className="text-2xl font-semibold mb-4">
              {sections[active].title}
            </h3>
            <p className="text-gray-700">{sections[active].content}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
