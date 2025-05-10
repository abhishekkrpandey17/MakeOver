"use client";
import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useState } from "react";

const topics = ["Trends", "How-To", "Reviews"];

const Page = () => {
  const [selected, setSelected] = useState<string>("Trends");
  const topicVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const articles = [
    {
      title: "Spring 2024 Makeup Trends to Try",
      author: "Ana Roberts",
      date: "April 13, 2023",
      tag: "Trends",
      published: "April 16, 2024",
      image: "/images/cosmetic.png",
    },
    {
      title: "Spring 2024 Makeup Trends to Try",
      author: "Ana Roberts",
      date: "April 13, 2023",
      tag: "Trends",
      published: "April 16, 2024",
      image: "/images/cosmetic.png",
    },
    {
      title: "Tips for Long-Lasting Eyeshadow",
      author: "Emily White",
      date: "April 12",
      tag: "How To",
      published: "April 12, 2024",
      image: "/images/cosmetic.png",
      stats: "3024",
    },
    {
      title: "My Morning Skincare Routine Explained",
      author: "Laura Adams",
      date: "April 3",
      tag: "Reviews",
      published: "April 10, 2023",
      image: "/images/cosmetic.png",
      stats: "404",
    },
    {
      title: "Spring 2024 Makeup Trends to Try",
      author: "Ana Roberts",
      date: "April 13, 2023",
      tag: "Trends",
      published: "April 16, 2024",
      image: "/images/cosmetic.png",
    },
    {
      title: "Tips for Long-Lasting Eyeshadow",
      author: "Emily White",
      date: "April 12",
      tag: "How To",
      published: "April 12, 2024",
      image: "/images/cosmetic.png",
      stats: "3024",
    },
    {
      title: "My Morning Skincare Routine Explained",
      author: "Laura Adams",
      date: "April 3",
      tag: "Reviews",
      published: "April 10, 2023",
      image: "/images/cosmetic.png",
      stats: "404",
    },
  ];

  return (
    <>
      <Header />
      <div className="text-center pb-10 pt-10 bg-lavender">
        <h1 className="text-5xl font-serif font-bold text-[#171619] mb-3">
          All Blogs
        </h1>
        <p className="text-[#6c6374] text-lg max-w-xl mx-auto p-1">
          Meet the creative minds behind your favorite beauty and fashion
          content.
        </p>
      </div>

      <div className="w-screen flex justify-center items-center  gap-4 pb-8 text-sm bg-lavender">
        {topics.map((topic, i) => (
          <motion.button
            key={topic}
            custom={i}
            variants={topicVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelected(topic)}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              selected === topic
                ? "bg-[#933194] text-white"
                : "bg-[#d5bedf] text-[#171619] hover:bg-[#b577bd] hover:text-white"
            }`}
          >
            {topic}
          </motion.button>
        ))}
      </div>
      <div className="pb-24 pt-5 bg-lavender flex  justify-center items-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid w-[90vw]  sm:grid-cols-2 md:grid-cols-4 gap-5 mx-auto "
        >
          {articles.map((article, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-[#e6d8ef] rounded-2xl shadow-md px-5 py-5 hover:shadow-lg transition-all"
            >
              <div className="w-full h-40 relative rounded-xl overflow-hidden mb-4">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center gap-2 text-sm text-[#6c6374] mb-2">
                <span className="bg-[#e0cdeb] text-[#171619] px-3 py-1 rounded-full text-xs font-medium">
                  {article.tag}
                </span>
                <span>{article.published}</span>
              </div>

              <h3 className="text-lg font-semibold text-[#171619] mb-2">
                {article.title}
              </h3>

              <p className="text-sm text-[#6c6374]">{article.author}</p>

              <div className="text-xs text-[#6c6374] mt-1">
                {article.date}
                {article.stats && <span className="mx-1">|</span>}
                {article.stats && <span>{article.stats}</span>}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default Page;
