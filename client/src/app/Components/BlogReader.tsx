"use client";

import React from "react";
import Image from "next/image";
import { Heart, Share2, ThumbsUp, ThumbsDown } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const BlogReader = () => {
  const comments = [
    {
      name: "Lola Carson",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      time: "2h ago",
      text: "Great tips! I’ve always struggled with getting even wings, but this makes it look so simple. Excited to try it out!",
      likes: 6,
    },
    {
      name: "Emily White",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      time: "4h ago",
      text: "The detailed explanation of each step is super helpful. Thanks for sharing!",
      likes: 4,
    },
    {
      name: "Olivia Taylor",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      time: "7h ago",
      text: "Love this tutorial! Step three was a game changer for me—my wings have never been sharper. Thank you!",
      likes: 9,
    },
    {
      name: "Hannah Kim",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      time: "10h ago",
      text: "I’ve been doing winged eyeliner for years, but I still found some new techniques here. Awesome post!",
      likes: 3,
    },
  ];

  return (
    <>
      <Header />
      <div className="bg-lavender text-deep-black min-h-screen px-4 py-10">
        <div className="max-w-6xl lg:max-w-5xl mx-auto bg-white flex flex-col justify-center items-center rounded-3xl p-6 pl-2 pr-2 md:p-10 shadow-xl">
          {/* Banner Image */}
          <div className="relative rounded-xl overflow-hidden shadow-md w-[99%]  lg:w-[90%] lg:h-[45vmin]">
            <Image
              src="/images/cosmo.jpg"
              alt="Winged Eyeliner"
              width={900}
              height={900}
            />

            <div className="absolute top-4 left-4 flex items-center bg-plum text-white text-xs px-3 py-1 rounded-full gap-2">
              <Heart size={14} /> 24 Likes
            </div>

            <div className="absolute top-4 right-4 flex gap-2">
              <button className="bg-white text-plum p-2 rounded-full shadow hover:bg-orchid hover:text-white transition">
                <ThumbsUp size={16} />
              </button>
              <button className="bg-white text-plum p-2 rounded-full shadow hover:bg-orchid hover:text-white transition">
                <ThumbsDown size={16} />
              </button>
            </div>

            <div className="absolute bottom-4 right-4 flex gap-2">
              <button className="bg-plum hover:bg-orchid text-white p-2 rounded-full">
                <Share2 size={16} />
              </button>
            </div>
          </div>

          {/* Title + Tags */}
          <div className="mt-6 flex flex-col md:flex-row md:items-start md:justify-between md:gap-8 flex-wrap">
            <h1 className="text-3xl md:text-4xl font-playfair font-bold leading-snug">
              Master the Perfect Winged Eyeliner in 5 Easy Steps
            </h1>

            <div className="mt-4 md:mt-0 text-sm text-muted-gray bg-dusty-lilac/20 px-2 py-2 rounded-lg">
              <p>
                <strong>Tags:</strong> Makeup, Eyeliner, Beginner Friendly
              </p>
              <p className="mt-1">
                <strong>Difficulty:</strong> Easy
              </p>
            </div>

            {/* Author & Date */}
            <div className="mt-4 flex items-center gap-2 text-muted-gray text-sm">
              <Image
                src="https://randomuser.me/api/portraits/women/5.jpg"
                alt="Author"
                width={36}
                height={36}
                className="rounded-full ml-2"
              />
              <span>Lola Carson</span> • <span>April 15, 2024</span>
            </div>
          </div>

          {/* Blog Content */}
          <div className="mt-8 space-y-6 text-muted-gray leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-deep-black mb-2">
                Welcome
              </h2>
              <p>
                Welcome to our beauty beauty-up – a glow-up guide for beginners.
                This tutorial helps you master the perfect winged eyeliner in
                five simple steps. With clear tips and easy tricks, you&lsquo;ll
                create a bold, beautiful look without stress.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-deep-black mb-2">
                Step One
              </h2>
              <p>
                Beginner’s tip: find your setup. A tiny mirror, angled light,
                and steady hand are your best friends. Start with a clean,
                primed lid and build your line slowly. Trust the flick!
              </p>
            </div>

            {/* Comments Section */}
            <div className="mt-10">
              <h3 className="text-2xl font-playfair mb-4">Comments</h3>

              <div className="bg-lavender px-4 py-2 pb-3 pt-3 rounded-xl mb-6 flex items-center justify-between">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  className="flex-grow bg-transparent outline-none text-sm px-2 text-plum"
                />
                <button className="text-sm px-6 py-6 pt-2 pb-2 font-plum bg-darkviolet text-white p-2 rounded-md">
                  Post
                </button>
              </div>

              <div className="space-y-6">
                {comments.map((c, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <Image
                      src={c.avatar}
                      alt={c.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-deep-black">{c.name}</p>
                      <p className="text-sm text-muted-gray">{c.text}</p>
                      <div className="flex items-center gap-4 mt-1 text-xs text-muted-gray">
                        <span>{c.time}</span>
                        <span className="cursor-pointer">Reply</span>
                        <div className="flex items-center gap-2 ml-auto">
                          <ThumbsUp size={14} /> {c.likes}
                          <ThumbsDown size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogReader;
