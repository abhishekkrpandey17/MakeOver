"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const faqs = [
  {
    q: "How can I post a question in the community?",
    a: "Go to the Community page and click on the 'Ask a Question' button. Fill in your question and submit—it’s that simple!",
  },
  {
    q: "How do I earn points as a contributor?",
    a: "You earn points by asking questions, giving answers, getting likes, and receiving upvotes on your contributions.",
  },
  {
    q: "What happens when I report a post?",
    a: "Reported posts are reviewed by moderators. If found inappropriate, the post may be removed and the user warned.",
  },
  {
    q: "Can I edit my answers after posting?",
    a: "Yes, just go to your answer and click the 'Edit' button below it to update your content.",
  },
];

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Header />
      <section className="min-h-screen bg-[#f3e8ff] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold text-purple-800 mb-4">
            ❓ Help Center / FAQ
          </h2>
          <p className="text-purple-700 text-lg">
            Need help? Here are answers to the most commonly asked questions by
            our beauty community.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="bg-white rounded-xl p-6 shadow-md cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-purple-800">
                  {faq.q}
                </h3>
                <span className="text-purple-500">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </div>
              {openIndex === idx && (
                <p className="text-sm text-gray-700 mt-3">{faq.a}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
