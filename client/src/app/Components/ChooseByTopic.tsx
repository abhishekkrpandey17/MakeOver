"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const topics = ["Trends", "How-To", "Reviews"];

const ChooseByTopic = () => {
  const [selected, setSelected] = useState<string>("Trends");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const topicVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="bg-[#f4e7fa] p-6 lg:p-10 rounded-xl w-[95vw] md:max-w-2xl lg:max-w-2xl mx-auto"
    >
      <h2 className="text-xl md:text-2xl font-bold text-[#171619] mb-6">
        Choose by Topic
      </h2>

      {/* Topic Buttons */}
      <div className="flex  gap-6 mb-8 text-sm">
        {topics.map((topic, i) => (
          <motion.button
            key={topic}
            custom={i}
            variants={topicVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelected(topic)}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              selected === topic
                ? "bg-[#933194] text-white"
                : "bg-[#d5bedf] text-[#171619] hover:bg-[#b577bd] hover:text-white"
            }`}
          >
            {topic}
          </motion.button>
        ))}
      </div>

      {/* Blog Preview (based on selected topic) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl p-4 shadow-md flex items-start gap-4"
      >
        <div className="w-16 h-16 bg-[#e4c6f1] rounded-full"></div>
        <div>
          <h3 className="text-md md:text-lg font-semibold text-[#171619] mb-1">
            Spring 2024 Makeup
          </h3>
          <p className="text-sm text-[#6c6374]">
            Explore the top picks and trends of the season with our beauty
            experts.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ChooseByTopic;
