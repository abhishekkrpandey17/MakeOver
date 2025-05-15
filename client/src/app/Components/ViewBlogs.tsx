"use client";
import React, { useEffect, useState } from "react";

type Blog = {
  title: string;
  content: string;
  image: string;
};

const mockBlogs: Blog[] = [
  {
    title: "How to Grow as an Author",
    content: "Consistency and creativity go hand in hand.",
    image: "/images/cosmo.jpg",
  },
  {
    title: "Writing for the Web",
    content: "Engage your readers in the first 3 seconds.",
    image: "/images/cosmo1.avif",
  },
  {
    title: "Top 5 Writing Tools",
    content: "Notion, Grammarly, Hemingway, Evernote, Google Docs",
    image: "/images/cosmetic.png",
  },
];

const ViewBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    setTimeout(() => setBlogs(mockBlogs), 800);
  }, []);

  const handleDelete = (index: number) => {
    const updated = blogs.filter((_, i) => i !== index);
    setBlogs(updated);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {blogs.length === 0 ? (
        <p className="text-center col-span-2 text-[#4b1a54]">
          Loading blogs...
        </p>
      ) : (
        blogs.map((blog, idx) => (
          <div
            key={idx}
            className="relative flex flex-col justify-center bg-white rounded-2xl w-[96%] shadow-md overflow-hidden"
          >
            <button
              onClick={() => handleDelete(idx)}
              className="absolute top-1 right-3 text-red-500 font-bold text-3xl z-10"
            >
              ×
            </button>
            <img
              src={blog.image}
              alt={blog.title}
              className="h-40 w-[90%] object-cover ml-5 mt-6 "
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#4b1a54] mb-1">
                {blog.title}
              </h3>
              <p className="text-gray-700 text-sm">{blog.content}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewBlogs;
