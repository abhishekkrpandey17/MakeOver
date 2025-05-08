"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

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
];

const LatestArticles = () => {
  const router = useRouter();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="bg-[#dbc3eb] py-12 px-4 lg:-mt-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-[#171619] mb-8 text-center"
      >
        Latest Articles
      </motion.h2>

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
            <div
              onClick={() => {
                router.push("/blogreader");
              }}
              className="w-full h-40 relative rounded-xl overflow-hidden mb-4"
            >
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
    </section>
  );
};

export default LatestArticles;
