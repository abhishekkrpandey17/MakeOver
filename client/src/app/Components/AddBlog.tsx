"use client";
import React, { useState } from "react";

const AddBlog = () => {
  const [blog, setBlog] = useState({ title: "", content: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("blogs") || "[]");
    localStorage.setItem("blogs", JSON.stringify([...existing, blog]));
    setBlog({ title: "", content: "" });
    alert("Blog added!");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-[#4b1a54]">Add New Blog</h2>
      <input
        type="text"
        placeholder="Blog Title"
        value={blog.title}
        onChange={(e) => setBlog({ ...blog, title: e.target.value })}
        className="w-full border border-[#b97ec5] rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#4b1a54]"
        required
      />
      <textarea
        placeholder="Blog Content"
        value={blog.content}
        onChange={(e) => setBlog({ ...blog, content: e.target.value })}
        className="w-full border border-[#b97ec5] rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#4b1a54]"
        rows={5}
        required
      />
      <button
        className="bg-[#4b1a54] text-white px-5 py-2 rounded-full hover:bg-[#3a0f40]"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default AddBlog;
