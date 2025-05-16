"use client";
import React, { useState, useEffect } from "react";
import ViewBlogs from "./ViewBlogs";
import Followers from "./Followers";
import BlogEditor from "../blogEditor/blogEditor";
import { useRouter } from "next/navigation";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const AuthorCMS = () => {
  const [tab, setTab] = useState("add");
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const verifyAuthor = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_APP_API_TEST_URL}api/v1/authors/verify`,
          { withCredentials: true }
        );

        if (data.success) {
          setAuthorized(true);
        } else {
          router.replace("/authors");
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        router.replace("/authors");
      } finally {
        setLoading(false);
      }
    };

    verifyAuthor();
  }, [router]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="pb-72 pt-60 flex items-center justify-center bg-[#e8d5f5]">
          <p className="text-[#4b1a54] text-lg font-semibold">
            Verifying author access...
          </p>
        </div>
        <Footer />
      </>
    );
  }

  if (!authorized) return null;

  return (
    <div className="pb-36 pt-24 bg-[#e8d5f5] p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex gap-4 justify-center mb-6">
          {["add", "view", "followers"].map((key) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`px-5 py-2 rounded-full font-medium shadow transition ${
                tab === key
                  ? "bg-[#4b1a54] text-white"
                  : "bg-white text-[#4b1a54] border border-[#b97ec5] hover:bg-[#f6e6fa]"
              }`}
            >
              {key === "add"
                ? "Add Blog"
                : key === "view"
                ? "View Blogs"
                : "Followers"}
            </button>
          ))}
        </div>

        <div>
          {tab === "add" && <BlogEditor />}
          {tab === "view" && <ViewBlogs />}
          {tab === "followers" && <Followers />}
        </div>
      </div>
    </div>
  );
};

export default AuthorCMS;
