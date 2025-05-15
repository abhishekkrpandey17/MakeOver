"use client";
import React, { useState } from "react";

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

  const handleDeleteBlog = (idx: number) => {
    setBlogList(blogList.filter((_, i) => i !== idx));
  };

  return (
    <div className="min-h-screen bg-[#e8d5f5] p-6">
      {/* Nav Switcher */}
      <div className="flex gap-4 justify-center mb-8">
        {["dashboard", "author", "blogs", "role"].map((key: string) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`px-5 py-2 rounded-full font-semibold capitalize transition duration-200 ${
              tab === key
                ? "bg-[#4b1a54] text-white"
                : "bg-white text-[#4b1a54] border border-[#b97ec5] hover:bg-[#f3dbfb]"
            }`}
          >
            {key}
          </button>
        ))}
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

          {/* Line Graph */}
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

      {/* Author Section */}
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

      {/* Blog Section */}
      {tab === "blogs" && (
        <div>
          <h2 className="text-2xl font-bold text-[#4b1a54] mb-6">
            Manage Blogs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {blogList.map((blog, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-xl shadow overflow-hidden hover:shadow-lg hover:-translate-y-1 transition duration-300"
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
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Role Section */}
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
    </div>
  );
}
