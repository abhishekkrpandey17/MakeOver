"use client";
import React, { useEffect, useState } from "react";

type Blog = {
  title: string;
  content: string;
  image: string;
  status: "pending" | "approved";
};

const mockBlogs: Blog[] = [
  {
    title: "How to Grow as an Author",
    content: "Consistency and creativity go hand in hand.",
    image: "/images/cosmo.jpg",
    status: "pending",
  },
  {
    title: "Writing for the Web",
    content: "Engage your readers in the first 3 seconds.",
    image: "/images/cosmo1.avif",
    status: "approved",
  },
  {
    title: "Top 5 Writing Tools",
    content: "Notion, Grammarly, Hemingway, Evernote, Google Docs",
    image: "/images/cosmetic.png",
    status: "pending",
  },
];

const ViewBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setBlogs(mockBlogs), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleDelete = (index: number) => {
    const updated = blogs.filter((_, i) => i !== index);
    setBlogs(updated);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.length === 0 ? (
        <p className="text-center col-span-3 text-[#4b1a54] font-semibold">
          Loading your blog drafts...
        </p>
      ) : (
        blogs.map((blog, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-2xl"
          >
            {/* Delete Button */}
            <button
              onClick={() => handleDelete(idx)}
              className="absolute top-2 right-3 text-red-500 font-bold text-2xl z-10 hover:text-red-700"
              title="Delete blog"
            >
              ×
            </button>

            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="h-40 w-full object-cover rounded-t-3xl"
            />

            {/* Blog Info */}
            <div className="px-5 py-4 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#4b1a54] mb-1">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600">{blog.content}</p>
              </div>

              {/* Status Badge */}
              <div className="mt-4">
                {blog.status === "pending" ? (
                  <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    ⏳ Pending Review
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    ✅ Approved
                  </span>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewBlogs;
