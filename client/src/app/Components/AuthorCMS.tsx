"use client";
import React, { useState } from "react";
import AddBlog from "./AddBlog";
import ViewBlogs from "./ViewBlogs";
import Followers from "./Followers";

const AuthorCMS = () => {
  const [tab, setTab] = useState("add");

  return (
    <div className="pb-12 pt-12 bg-[#e8d5f5] p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex gap-4 justify-center mb-6">
          <button
            onClick={() => setTab("add")}
            className={`px-5 py-2 rounded-full font-medium shadow ${
              tab === "add"
                ? "bg-[#4b1a54] text-white"
                : "bg-white text-[#4b1a54] border border-[#b97ec5]"
            }`}
          >
            Add Blog
          </button>
          <button
            onClick={() => setTab("view")}
            className={`px-5 py-2 rounded-full font-medium shadow ${
              tab === "view"
                ? "bg-[#4b1a54] text-white"
                : "bg-white text-[#4b1a54] border border-[#b97ec5]"
            }`}
          >
            View Blogs
          </button>
          <button
            onClick={() => setTab("followers")}
            className={`px-5 py-2 rounded-full font-medium shadow ${
              tab === "followers"
                ? "bg-[#4b1a54] text-white"
                : "bg-white text-[#4b1a54] border border-[#b97ec5]"
            }`}
          >
            Followers
          </button>
        </div>

        <div>
          {tab === "add" && <AddBlog />}
          {tab === "view" && <ViewBlogs />}
          {tab === "followers" && <Followers />}
        </div>
      </div>
    </div>
  );
};

export default AuthorCMS;
