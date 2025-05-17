/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import axios from "axios";

const authors = [
  {
    name: "Aditi Rao",
    email: "aditi@example.com",
    role: "Skin Expert",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Priya Sharma",
    email: "priya@example.com",
    role: "Beauty Blogger",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    name: "Meera Kapoor",
    email: "meera@example.com",
    role: "Hair Stylist",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
  },
];

const blogs = [
  {
    title: "Lipstick Trends",
    content: "Hot shades for 2025",
    image: "/images/cosmo.jpg",
  },
  {
    title: "Glowing Skin",
    content: "Secrets to radiant skin",
    image: "/images/cosmo1.avif",
  },
  {
    title: "Makeup for Weddings",
    content: "Elegant bridal looks",
    image: "/images/cosmetic.png",
  },
];

export default function AdminCMS() {
  const [tab, setTab] = useState("dashboard");
  const [blogList, setBlogList] = useState(blogs);
  const [formData, setFormData] = useState({
    uid: "",
    name: "",
    email: "",
    experience: "",
    bio: "",
    interest: "", // ✅ New field
  });

  const handleDeleteBlog = (idx: number) => {
    setBlogList(blogList.filter((_, i) => i !== idx));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddAuthor = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_API_TEST_URL}api/v1/authors/register`,
        formData
      );
      alert("Author registered successfully!");
      setFormData({
        uid: "",
        name: "",
        email: "",
        experience: "",
        bio: "",
        interest: "",
      });
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        alert(err.response.data?.message || "Failed to register author");
      } else {
        alert("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="pt-20 pb-32 bg-[#e8d5f5] p-6">
      {/* Tab Switcher */}
      <div className="flex gap-4 justify-center mb-8 flex-wrap">
        {["dashboard", "author", "blogs", "role", "add-author"].map(
          (key: string) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`px-5 py-2 rounded-full font-semibold capitalize transition duration-200 ${
                tab === key
                  ? "bg-[#4b1a54] text-white"
                  : "bg-white text-[#4b1a54] border border-[#b97ec5] hover:bg-[#f3dbfb]"
              }`}
            >
              {key.replace("-", " ")}
            </button>
          )
        )}
      </div>

      {/* Dashboard */}
      {tab === "dashboard" && (
        <div>
          <h2 className="text-2xl font-bold text-[#4b1a54] mb-6">
            Admin Dashboard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { label: "Users", count: 1220 },
              { label: "Blogs", count: blogList.length },
              { label: "Visits Today", count: 823 },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow p-6 text-center hover:scale-105 transition transform duration-300"
              >
                <h3 className="text-3xl font-bold text-[#4b1a54]">
                  {stat.count}
                </h3>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* SVG Line Graph */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold text-[#4b1a54] mb-4">
              Growth Overview
            </h3>
            <svg viewBox="0 0 100 40" className="w-full h-32">
              <polyline
                fill="none"
                stroke="#b97ec5"
                strokeWidth="2"
                points="0,30 20,20 40,25 60,10 80,18 100,5"
              />
              {[30, 20, 25, 10, 18, 5].map((cy, i) => (
                <circle key={i} cx={i * 20} cy={cy} r="1.5" fill="#4b1a54" />
              ))}
            </svg>
            <p className="text-sm text-gray-600 mt-4">
              Mock line graph using SVG path
            </p>
          </div>
        </div>
      )}

      {/* Author List */}
      {tab === "author" && (
        <div>
          <h2 className="text-2xl font-bold text-[#4b1a54] mb-6">
            Manage Authors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {authors.map((author, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow p-4 flex gap-4 items-center hover:shadow-lg hover:scale-[1.02] transition duration-200"
              >
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-[#4b1a54] font-semibold">
                    {author.name}
                  </h3>
                  <p className="text-sm text-gray-600">{author.email}</p>
                  <p className="text-sm text-[#b97ec5]">{author.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Blogs */}
      {tab === "blogs" && (
        <div>
          <h2 className="text-2xl font-bold text-[#4b1a54] mb-6">
            Manage Blogs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {blogList.map((blog, idx) => (
              <div
                key={idx}
                className="relative bg-white pb-8  rounded-xl shadow overflow-hidden hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                <button
                  onClick={() => handleDeleteBlog(idx)}
                  className="absolute top-2 right-3 text-red-500 text-lg font-bold z-10"
                >
                  ×
                </button>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-32 w-full object-cover"
                />
                <div className="p-3">
                  <h3 className="text-md font-bold text-[#4b1a54]">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600">{blog.content}</p>
                </div>
                {/* Action Buttons */}
                {/* Buttons */}
                <div className="flex justify-between gap-1">
                  <button
                    onClick={() => alert("Approved")}
                    className="flex-1 bg-[#d6f7e1] ml-1 text-[#1b7232] text-xs font-semibold px-3 py-2 rounded-full hover:bg-[#b7f0cd] transition"
                  >
                    ✅ Approve
                  </button>
                  <button
                    onClick={() => alert("Rejected")}
                    className="flex-1 bg-[#ffe5e5] mr-2 text-[#b91c1c] text-xs font-semibold px-3 py-2 rounded-full hover:bg-[#ffc6c6] transition"
                  >
                    ❌ Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Role Assignment */}
      {tab === "role" && (
        <div className="flex justify-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Role assigned!");
            }}
            className="bg-white rounded-xl shadow p-6 w-full max-w-md"
          >
            <h2 className="text-2xl font-bold text-[#4b1a54] mb-6 text-center">
              Assign Roles
            </h2>
            <input
              type="email"
              placeholder="User Email"
              required
              className="w-full border border-[#b97ec5] px-4 py-2 mb-4 rounded focus:outline-[#4b1a54]"
            />
            <select className="w-full border border-[#b97ec5] px-4 py-2 mb-4 rounded focus:outline-[#4b1a54]">
              <option>Author</option>
              <option>Moderator</option>
              <option>Admin</option>
            </select>
            <button className="w-full bg-[#4b1a54] text-white px-6 py-2 rounded-full hover:bg-[#3a0e47] transition">
              Assign Role
            </button>
          </form>
        </div>
      )}

      {/* Add Author */}
      {tab === "add-author" && (
        <div className="flex justify-center">
          <form
            onSubmit={handleAddAuthor}
            className="bg-white rounded-xl shadow p-6 w-full max-w-xl"
          >
            <h2 className="text-2xl font-bold text-[#4b1a54] mb-6 text-center">
              Add New Author
            </h2>
            <input
              name="uid"
              value={formData.uid}
              onChange={handleInputChange}
              placeholder="UID"
              required
              className="w-full border border-[#b97ec5] px-4 py-2 mb-4 rounded"
            />
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              required
              className="w-full border border-[#b97ec5] px-4 py-2 mb-4 rounded"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
              className="w-full border border-[#b97ec5] px-4 py-2 mb-4 rounded"
            />
            <input
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              placeholder="Experience (e.g. 3 years)"
              className="w-full border border-[#b97ec5] px-4 py-2 mb-4 rounded"
            />
            <input
              name="interest"
              value={formData.interest}
              onChange={handleInputChange}
              placeholder="Interest (e.g. skincare, content writing)"
              className="w-full border border-[#b97ec5] px-4 py-2 mb-4 rounded"
            />
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              placeholder="Short Bio"
              className="w-full border border-[#b97ec5] px-4 py-2 mb-4 rounded"
              rows={3}
            />
            <button className="w-full bg-[#4b1a54] text-white px-6 py-2 rounded-full hover:bg-[#3a0e47] transition">
              Register Author
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
