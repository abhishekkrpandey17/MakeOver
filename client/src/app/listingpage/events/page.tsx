"use client";

import { useState } from "react";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";

const categories: Array<keyof typeof eventCards> = [
  "Diwali",
  "Mehendi",
  "Bridal",
  "Party",
];

const eventCards = {
  Diwali: [
    {
      title: "Glow-Up Makeup Look",
      desc: "Festive-ready shimmer and bold kajal with dewy skin glow.",
      img: "/imgcos1.avif",
    },
    {
      title: "Traditional Saree Draping",
      desc: "Classic pleated drapes with hair flowers and bindis.",
      img: "/imgcos2.avif",
    },
  ],
  Mehendi: [
    {
      title: "Floral Mehendi Hairstyle",
      desc: "Messy buns with gajra and floral pins for the occasion.",
      img: "/mk1.avif",
    },
    {
      title: "Bold Eyes & Peach Lips",
      desc: "Perfect combo for a vibrant mehendi afternoon.",
      img: "/mk2.avif",
    },
  ],
  Bridal: [
    {
      title: "Bridal Matte Finish Look",
      desc: "Long-lasting bridal look with contour and defined eyes.",
      img: "/mk3.avif",
    },
    {
      title: "Red Lehenga Look",
      desc: "Classic red bridal combo with gold shadow & red lips.",
      img: "/mk4.avif",
    },
  ],
  Party: [
    {
      title: "Neon Party Glam",
      desc: "Shiny lids, glowing cheeks, and holographic highlighter.",
      img: "/mk5.avif",
    },
    {
      title: "Smokey Eye Night Out",
      desc: "Smokey black with nude lip – perfect for a night bash.",
      img: "/mk6.avif",
    },
    {
      title: "Red Lehenga Look",
      desc: "Classic red bridal combo with gold shadow & red lips.",
      img: "/mk4.avif",
    },
  ],
};

export default function EventsOccasionPage() {
  const [activeTab, setActiveTab] = useState<keyof typeof eventCards>("Diwali");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCards = eventCards[activeTab].filter(
    (card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="pt-20 pb-20 px-4 bg-gradient-to-b from-pink-50 to-white min-h-screen">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-fuchsia-700 mb-4">
            ✨ Events & Occasion Styles
          </h1>
          <p className="text-purple-500 mb-8">
            Curated looks for every celebration – glow with confidence!
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveTab(cat);
                  setSearchTerm(""); // reset search on tab switch
                }}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition ${
                  activeTab === cat
                    ? "bg-fuchsia-600 text-white shadow"
                    : "bg-white text-purple-700 border-purple-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="max-w-md mx-auto mb-10 relative">
            <input
              type="text"
              placeholder={`Search ${activeTab} styles...`}
              className="w-full px-10 py-2 pl-11 rounded-full border border-purple-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FiSearch className="absolute left-4 top-2.5 text-purple-500 text-lg" />
          </div>

          {/* Cards */}
          {filteredCards.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {filteredCards.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow p-4 text-left hover:shadow-lg transition"
                >
                  <div className="rounded-xl overflow-hidden mb-3">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="w-full h-[200px] object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-fuchsia-700">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 mt-10">
              No results found for your search.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
