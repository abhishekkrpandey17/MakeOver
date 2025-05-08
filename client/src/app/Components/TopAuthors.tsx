"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Author {
  name: string;
  articles: number;
  image: string;
}

const authors: Author[] = [
  {
    name: "kaushiki kapoor",
    articles: 3,
    image: "/images/author1.png",
  },
  {
    name: "Emily White",
    articles: 3,
    image: "/images/author1.png",
  },
  {
    name: "kajal Dixit",
    articles: 3,
    image: "/images/author1.png",
  },
];

const TopAuthors = () => {
  const router = useRouter();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-[#dbc3eb] p-6 max-w-sm mx-auto"
    >
      <h2 className="text-xl font-bold text-[#171619] mb-6">Top Authors</h2>

      <div className="space-y-4">
        {authors.map((author, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#e8d3f0] transition-colors"
          >
            <div className="w-12 h-12 relative rounded-full overflow-hidden">
              <Image
                src={author.image}
                alt={author.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div>
              <p className="font-semibold text-[#171619]">{author.name}</p>
              <p className="text-sm text-[#6c6374]">
                {author.articles} articles
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subscribe CTA */}
      <motion.div
        onClick={() => {
          router.push("/allauthors");
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4 }}
        className="mt-6 bg-[#b577bd] px-6 py-3 rounded-full text-white text-center font-medium cursor-pointer hover:bg-[#933194] transition-all"
      >
        All Authors
      </motion.div>
    </motion.div>
  );
};

export default TopAuthors;
