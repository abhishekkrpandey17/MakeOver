"use client";

import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import { useState } from "react";

const tabs = ["Disclaimer", "Privacy Policy", "Terms & Conditions"];

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState("Disclaimer");

  const renderContent = () => {
    switch (activeTab) {
      case "Disclaimer":
        return (
          <>
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              📌 Introduction
            </h2>
            <p className="mb-4 text-gray-600">
              MakeOver provides a platform for users to discover, review, and
              engage with beauty, skincare, and wellness services. While we aim
              to offer helpful and inspiring content, all information is shared
              in good faith and is intended for general informational purposes
              only.
            </p>
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              💡 Use With Caution
            </h2>
            <p className="mb-4 text-gray-600">
              Always consult a licensed medical or skincare professional before
              applying any new product or treatment suggested by community
              content. MakeOver is not liable for any damage, skin reactions, or
              injury resulting from reliance on posted content or user
              experiences.
            </p>
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              📷 User Content Responsibility
            </h2>
            <p className="mb-4 text-gray-600">
              Content including reviews, comments, and images shared on MakeOver
              are the sole responsibility of the contributor. We reserve the
              right to moderate or remove content that violates our community
              standards or presents misinformation.
            </p>
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              📎 Brand Mention Policy
            </h2>
            <p className="text-gray-600">
              Mention of any brand, product, or salon does not imply
              endorsement. Sponsored content will always be disclosed. Opinions
              are those of the respective contributors.
            </p>
          </>
        );

      case "Privacy Policy":
        return (
          <>
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              🔒 Data We Collect
            </h2>
            <p className="mb-4 text-gray-600">
              We collect personal data when you register, submit reviews, or
              interact with platform features. This may include your name, email
              address, location, IP address, preferences, and uploaded media.
            </p>
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              🔐 How We Use It
            </h2>
            <p className="mb-4 text-gray-600">
              Your data helps us personalize recommendations, improve platform
              performance, respond to support queries, and display relevant
              content and offers. We do not share your personal data with
              advertisers.
            </p>
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              🛡️ Data Protection
            </h2>
            <p className="mb-4 text-gray-600">
              We use encryption, secure cloud hosting, and access restrictions
              to protect your data. You can request to download or permanently
              delete your data by contacting us at privacy@make-over.in.
            </p>
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              📤 Third-Party Tools
            </h2>
            <p className="text-gray-600">
              We may use third-party tools like Google Analytics, Meta Pixel, or
              Stripe Payments, each governed by their own policies. We ensure
              minimum data sharing and do not sell user data to any external
              party.
            </p>
          </>
        );

      case "Terms & Conditions":
        return (
          <>
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              📚 Platform Usage Agreement
            </h2>
            <p className="mb-4 text-gray-600">
              By accessing MakeOver, you agree to use the site responsibly,
              respect the opinions of others, and contribute positively. You
              must be at least 13 years old or have parental consent to create
              an account or post content.
            </p>
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              🚫 Prohibited Behavior
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Creating fake reviews or manipulating ratings</li>
              <li>Posting abusive, threatening, or discriminatory content</li>
              <li>Advertising services without consent or spamming users</li>
              <li>
                Violating intellectual property rights (e.g. using someone
                else&#39;s images)
              </li>
            </ul>
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              ⚖️ Account Termination
            </h2>
            <p className="mb-4 text-gray-600">
              Violation of these terms may result in warnings, content removal,
              or permanent suspension. MakeOver reserves the right to take
              appropriate action at its sole discretion.
            </p>
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              📝 Changes to Terms
            </h2>
            <p className="text-gray-600">
              We may update these terms from time to time. Continued use of the
              platform after updates constitutes acceptance. Significant changes
              will be communicated via email or dashboard alerts.
            </p>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Header />

      <div className="pt-20 pb-20 bg-gradient-to-b from-[#f8f0ff] to-white py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-lg">
          <h1 className="text-3xl font-bold text-purple-800 text-center mb-6">
            Help, Legal & Community Guidelines 💜
          </h1>

          {/* Nav Switcher */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-md"
                    : "bg-white text-purple-600 border border-purple-300 hover:bg-purple-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="text-sm space-y-5">{renderContent()}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
