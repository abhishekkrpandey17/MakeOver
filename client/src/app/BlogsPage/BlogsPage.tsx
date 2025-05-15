"use client";

import { useEffect, useState } from "react";

export default function BlogPage() {
  interface Blog {
    title: string;
    createdAt: string;
    tags?: string[];
    content: string;
    images?: string[];
  }

  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    // Replace with your actual blog fetch endpoint or pass via props
    fetch("http://localhost:8070/api/v1/blogs/6825db033e83db4874015cff", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setBlog(data.blog));
  }, []);

  if (!blog) return <p className="p-4">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

      <div className="text-sm text-gray-500 mb-2">
        Posted on: {new Date(blog.createdAt).toLocaleDateString()}
      </div>

      <div className="flex flex-wrap gap-2 text-sm text-purple-700 mb-6">
        {blog.tags?.map((tag: string) => (
          <span key={tag} className="bg-purple-100 px-2 py-1 rounded-full">
            #{tag}
          </span>
        ))}
      </div>

      {/* 🔥 Renders rich text content with base64 image safely */}
      <div
        className="prose max-w-full"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      {/* Optionally show uploaded images too */}
      {(blog.images ?? []).length > 0 && (
        <div className="mt-6 space-y-4">
          <h2 className="text-xl font-semibold">Uploaded Images:</h2>
          {(blog.images ?? []).map((img, i) => (
            <img
              key={i}
              src={`http://localhost:8070/uploads/${img}`}
              alt={`Blog Image ${i + 1}`}
              className="rounded-md shadow-md w-full max-w-md"
            />
          ))}
        </div>
      )}
    </div>
  );
}
