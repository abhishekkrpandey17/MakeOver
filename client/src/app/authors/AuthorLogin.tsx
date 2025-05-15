"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useRouter } from "next/navigation";

const AuthorLogin = () => {
  const [form, setForm] = useState({ uid: "", email: "" });
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
        process.env.NEXT_PUBLIC_APP_API_TEST_URL + "api/v1/authors/login",
        {
          uid: form.uid,
          email: form.email,
        },
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        router.push("/authorcms");
      } else {
        alert("⚠️ Login failed: " + res.data.message);
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.error("Axios error:", err.response?.data || err.message);
      } else {
        console.error("Unexpected error:", err);
      }
      alert("❌ Login error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pb-24 pt-14 md:pt-36 flex flex-col md:flex-row items-center justify-center bg-[#f6e8fb] px-4 py-12">
      {/* Left Visual */}
      <div className="hidden md:flex md:w-[43%] bg-[#4c0f5a] text-white rounded-2xl md:rounded-r-none flex-col justify-center items-center p-10">
        <Image
          src="/images/authorlogin.png"
          alt="Author Illustration"
          height={230}
          width={230}
        />
        <div className="text-center mt-6">
          <h2 className="text-4xl font-bold mb-4 font-serif">
            Welcome Back, Author!
          </h2>
          <p className="text-purple-200 text-sm max-w-sm mx-auto mb-6">
            Share your thoughts, inspire readers, and be part of the beauty
            revolution. 💄
          </p>
        </div>
      </div>

      {/* Right Login Form */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 w-full max-w-md bg-white text-purple-900 rounded-2xl md:rounded-l-none shadow-2xl p-8 md:p-10"
      >
        <h2 className="text-3xl font-bold mb-4 font-serif text-center">
          Author Login
        </h2>
        <p className="text-sm text-center mb-6 text-purple-600">
          Log in to your author dashboard to manage blogs, view feedback, and
          build your reader community 💅
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm">UID</label>
            <input
              type="text"
              name="uid"
              value={form.uid}
              onChange={handleChange}
              required
              placeholder="Enter your Author UID"
              className="w-full px-4 py-2 rounded-lg text-black border border-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
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
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-pink-300" : "bg-pink-500 hover:bg-pink-600"
            } text-white font-semibold py-2 rounded-full transition duration-300`}
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

export default AuthorLogin;
