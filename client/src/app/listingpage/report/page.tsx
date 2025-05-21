"use client";

import { useState } from "react";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";

export default function AbuseComplaintPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "Abuse",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Report:", form);
    alert(
      "✅ Your report has been submitted. Our team will review it within 24 hours. Thank you for helping us maintain a safe platform."
    );
    setForm({ name: "", email: "", type: "Abuse", message: "" });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f3e8ff] pt-10 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-purple-800 mb-2">
            Report Abuse or Complaint
          </h1>
          <p className="text-gray-600 mb-1">
            Your safety matters to us. If you&lsquo;ve encountered any
            inappropriate behavior, content, or fake profiles — let us know. We
            take such reports seriously and investigate promptly.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            🚨 Note: Your identity will remain confidential. Please provide as
            much detail as possible for a quick resolution.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                👤 Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
                placeholder="e.g. Priya Sharma"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                📧 Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
                placeholder="e.g. priya@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                📝 Type of Issue
              </label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="Abuse">Abuse</option>
                <option value="Fake Profile">Fake Profile</option>
                <option value="Harassment">Harassment</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                📣 Describe the Issue
              </label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Please describe what happened, where, and who was involved (if known)..."
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition font-semibold"
            >
              🚀 Submit Report
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
