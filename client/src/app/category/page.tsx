"use client";

import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

type Blog = {
  title: string;
  description: string;
  author: string;
  img: string;
  category: "How To" | "Trends" | "Products";
};

const blogs: Blog[] = [
  {
    title: "How to Perfect the No-Makeup Look",
    description: "Discover a step-by-step guide to a flawless, natural face.",
    author: "Anika Sharma",
    img: "/mk1.avif",
    category: "How To",
  },
  {
    title: "Top 5 Summer Skincare Tips",
    description:
      "Beat the heat with these dermatologist-approved skincare hacks.",
    author: "Dr. Meera Bhatia",
    img: "/mk2.avif",
    category: "How To",
  },
  {
    title: "Trending Lip Shades for 2025",
    description:
      "From soft nudes to bold berries, see what's trending this year.",
    author: "Riya Kapoor",
    img: "/mk3.avif",
    category: "Trends",
  },
  {
    title: "Glitter Eyeshadow Tutorial for Festivals",
    description: "Master the art of applying glitter that lasts all night.",
    author: "Zara Malik",
    img: "/mk4.avif",
    category: "How To",
  },
  {
    title: "Bridal Makeup Dos and Don'ts",
    description:
      "Your ultimate checklist to avoid makeup disasters on your big day.",
    author: "Simran Kohli",
    img: "/mk5.avif",
    category: "Products",
  },
  {
    title: "Monsoon-Proof Makeup Routine",
    description:
      "Stay flawless in humid weather with these essential products.",
    author: "Tanya Verma",
    img: "/mk6.avif",
    category: "Products",
  },
];

export default function Page() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [filtered, setFiltered] = useState<Blog[]>(blogs);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Debounced filtering
  useEffect(() => {
    const timer = setTimeout(() => {
      const term = search.toLowerCase();
      const filteredBlogs = blogs.filter((blog) => {
        const matchesSearch =
          blog.title.toLowerCase().includes(term) ||
          blog.description.toLowerCase().includes(term) ||
          blog.author.toLowerCase().includes(term);
        const matchesCategory =
          category === "All" || blog.category === category;
        return matchesSearch && matchesCategory;
      });
      setFiltered(filteredBlogs);
    }, 300);

    return () => clearTimeout(timer);
  }, [search, category]);

  // Suggestions (Top 5 titles)
  useEffect(() => {
    const term = search.toLowerCase();
    if (term.length === 0) {
      setSuggestions([]);
      return;
    }
    const matched = blogs
      .filter((b) => b.title.toLowerCase().includes(term))
      .slice(0, 5)
      .map((b) => b.title);
    setSuggestions(matched);
  }, [search]);

  return (
    <>
      <Header />
      <section className="bg-[#f8edff] min-h-screen py-16 px-6">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-500 drop-shadow-sm mb-3">
          Your Daily Dose of Beauty & Glam Blogs!
        </h2>
        <p className="text-center text-purple-600 max-w-2xl mx-auto mb-8 text-base">
          Discover skincare secrets, makeup magic, trending looks, and product
          reviews curated just for you.
        </p>

        {/* Search + Filters */}
        <div className="flex flex-col items-center gap-4 mb-10 relative">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search blogs..."
              className="pl-12 pr-6 py-3 rounded-full bg-white border border-purple-300 shadow-sm w-full text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <MagnifyingGlassIcon className="w-5 h-5 text-purple-500 absolute left-4 top-1/2 transform -translate-y-1/2" />
            {suggestions.length > 0 && (
              <div className="absolute z-10 mt-2 w-full bg-white rounded-md shadow-md border border-purple-100">
                {suggestions.map((s, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 hover:bg-purple-50 text-sm text-purple-800 cursor-pointer"
                    onClick={() => setSearch(s)}
                  >
                    {s}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-3 flex-wrap justify-center">
            {["All", "How To", "Trends", "Products"].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  category === cat
                    ? "bg-purple-700 text-white shadow"
                    : "bg-white border border-purple-300 text-purple-700 hover:bg-purple-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filtered.map((blog, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5 space-y-2">
                <h3 className="text-xl font-semibold text-purple-800">
                  {blog.title}
                </h3>
                <p className="text-sm text-purple-600">By {blog.author}</p>
                <p className="text-gray-700 text-sm">{blog.description}</p>
                <button className="text-purple-700 font-medium hover:underline mt-2">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filtered.length === 0 && (
          <p className="text-center mt-10 text-purple-600">
            No blogs match your search or filter criteria.
          </p>
        )}
      </section>
      <Footer />
    </>
  );
}
