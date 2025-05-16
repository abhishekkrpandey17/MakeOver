"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useRouter } from "next/navigation";

const AdminLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_API_TEST_URL}api/v1/admin/login`,
        { email: form.email, password: form.password },
        { withCredentials: true }
      );

      alert(res.data.message || "Login successful");
      router.push("/admincms");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.message || "Login failed");
      } else {
        alert("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pb-36 pt-14 md:pt-40 flex flex-col md:flex-row items-center justify-center bg-[#f6e8fb] px-4 py-12">
      {/* Left: Visual */}
      <div className="hidden md:flex md:w-[43%] bg-[#4c0f5a] text-white rounded-2xl md:rounded-r-none flex-col justify-center items-center p-13">
        <Image
          src="/images/admin.png"
          alt="Admin Illustration"
          height={210}
          width={210}
        />
        <div className="text-center mt-6">
          <h2 className="text-3xl font-bold font-serif mb-2">Admin Portal</h2>
          <p className="text-purple-200 text-sm max-w-xs leading-6">
            Manage users, authors, reports, and settings from the MakeOver Admin
            Panel 🛠️
          </p>
        </div>
      </div>

      {/* Right: Login Form */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 w-full max-w-md bg-white text-purple-900 rounded-2xl md:rounded-l-none shadow-2xl p-8 md:p-10"
      >
        <h2 className="text-3xl font-bold text-center mb-4 font-serif">
          Admin Login
        </h2>
        <p className="text-sm text-center mb-6 text-purple-600">
          Restricted area – authorized personnel only 🔐
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg text-black border border-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Enter your password..."
              className="w-full px-4 py-2 rounded-lg text-black border border-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-full transition duration-300"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-purple-500">
          Need help? Contact your system administrator.
        </p>
      </motion.div>
    </section>
  );
};

export default AdminLogin;
