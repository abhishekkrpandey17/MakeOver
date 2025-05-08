'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image';

interface Author {
  name: string;
  posts: number;
  image: string;
}

const authors: Author[] = [
  { name: 'Ava Williams', posts: 20, image: '/images/author1.png' },
  { name: 'Jemma Brooks', posts: 28, image: '/images/author1.png' },
  { name: 'Sophia Lee', posts: 24, image: '/images/author1.png' },
  { name: 'Mia Chen', posts: 24, image: '/images/author1.png' },
  { name: 'David Kim', posts: 21, image: '/images/author1.png' },
  { name: 'Lily Adams', posts: 19, image: '/images/author1.png' },
  { name: 'Grace Brown', posts: 18, image: '/images/author1.png' },
  { name: 'Emily Clark', posts: 22, image: '/images/author1.png' },
  { name: 'Emily Clark', posts: 22, image: '/images/author1.png' },
  { name: 'Emily Clark', posts: 22, image: '/images/author1.png' },
];

const AllAuthors = () => {
  const [query, setQuery] = useState('');

  const filtered = authors.filter((a) =>
    a.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#dbc3eb] py-12 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-5xl font-serif font-bold text-[#171619] mb-3">
          All Authors
        </h1>
        <p className="text-[#6c6374] text-lg max-w-xl mx-auto">
          Meet the creative minds behind your favorite beauty and fashion content.
        </p>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-xl mx-auto mb-12"
      >
        <div className="flex items-center bg-[#f4e7fa] rounded-xl px-6 py-3 shadow-md border border-[#e0cdeb]">
          <FiSearch className="text-xl text-[#6c6374] mr-3" />
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent flex-grow outline-none text-[#171619] placeholder-[#6c6374] text-base"
          />
        </div>
      </motion.div>

      {/* Author Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-3xl mx-auto"
      >
        {filtered.map((author, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-[#e6d8ef] rounded-2xl shadow-md p-5 text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-30 h-30 mx-auto mb-3 relative rounded-full overflow-hidden">
              <Image
                src={author.image}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            <p className="font-semibold text-[#171619] text-base mt-[4vmin]">
              {author.name}
            </p>
            <p className="text-sm text-[#6c6374] mt-[1.5vmin]">{author.posts} posts</p>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default AllAuthors;