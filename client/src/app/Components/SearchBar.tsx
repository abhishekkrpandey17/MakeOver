'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className='bg-[#dbc3eb]'>
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="w-full flex justify-center px-4"
    >
      <form className="flex items-center bg-[#e9d9f3] rounded-full overflow-hidden max-w-xl w-full shadow-sm mt-5">
        <input
          type="text"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow px-6 py-3 bg-transparent text-[#2e213a] placeholder-[#2e213a] text-lg outline-none font-medium"
        />
        <button
          type="submit"
          className="bg-[#933194] hover:bg-[#a350ab] text-white text-lg font-semibold px-6 py-3 rounded-r-full transition-all duration-300"
        >
          Search
        </button>
      </form>
    </motion.div>
    </div>
  );
};

export default SearchBar;
