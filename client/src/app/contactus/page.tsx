"use client";
import { useState } from "react";
import {
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Page() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <>
      <Header />
      <section className="min-h-screen bg-[#f3e8ff] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-800 text-center mb-4">
            💌 Let’s Connect!
          </h2>
          <p className="text-center text-purple-600 max-w-xl mx-auto mb-10">
            Whether it&lsquo;s beauty advice, brand collaboration, or just a
            hello — we’re always happy to hear from you 💄✨
          </p>

          <div className="flex flex-wrap-reverse gap-10 justify-between">
            {/* 📬 Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-2xl shadow-lg flex-1 min-w-[300px] space-y-5"
            >
              <div className="relative">
                <UserIcon className="w-5 h-5 text-purple-400 absolute left-3 top-3.5" />
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 ring-purple-400 text-sm"
                  required
                />
              </div>
              <div className="relative">
                <EnvelopeIcon className="w-5 h-5 text-purple-400 absolute left-3 top-3.5" />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 ring-purple-400 text-sm"
                  required
                />
              </div>
              <div className="relative">
                <PencilIcon className="w-5 h-5 text-purple-400 absolute left-3 top-3.5" />
                <input
                  type="text"
                  placeholder="Subject (Optional)"
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 ring-purple-400 text-sm"
                />
              </div>
              <div className="relative">
                <ChatBubbleLeftRightIcon className="w-5 h-5 text-purple-400 absolute left-3 top-3.5" />
                <textarea
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  rows={5}
                  className="w-full pl-10 pr-4 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 ring-purple-400 text-sm"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-purple-700 text-white w-full py-3 rounded-md hover:bg-purple-800 transition-all text-sm font-medium"
              >
                💬 Send Your Message
              </button>
              {submitted && (
                <p className="text-green-600 text-sm font-medium mt-2 text-center">
                  🎉 Your message has been sent successfully!
                </p>
              )}
            </form>

            {/* 📍 Contact Info */}
            <div className="bg-white p-6 rounded-2xl shadow-lg flex-1 min-w-[280px] space-y-6 text-purple-900">
              <div className="flex items-start gap-4">
                <EnvelopeIcon className="w-6 h-6 text-purple-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <p>support@make-over.in</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPinIcon className="w-6 h-6 text-purple-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Visit Us</h4>
                  <p>MakeOver HQ, Rose Avenue, Delhi, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ClockIcon className="w-6 h-6 text-purple-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Working Hours</h4>
                  <p>
                    Mon–Fri: 10:00 AM – 6:00 PM
                    <br />
                    Sat–Sun: Closed
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-500 pt-4">
                💡 For faster replies, DM us on Instagram @makeover.community
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
