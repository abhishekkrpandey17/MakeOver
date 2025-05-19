"use client";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const authors = [
  {
    name: "Kaushiki Kapoor",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Passionate about skincare routines and minimal beauty.",
    blogs: 12,
    followers: 320,
    comments: 89,
    points: 740,
  },
  {
    name: "Emily White",
    avatar: "https://randomuser.me/api/portraits/women/56.jpg",
    bio: "Loves writing about eye makeup and latest trends.",
    blogs: 10,
    followers: 278,
    comments: 95,
    points: 660,
  },
  {
    name: "Kajal Dixit",
    avatar: "https://randomuser.me/api/portraits/women/61.jpg",
    bio: "Bold looks and editorial styles are her playground.",
    blogs: 9,
    followers: 250,
    comments: 75,
    points: 620,
  },
];

export default function AuthorTopContributors() {
  return (
    <>
      <Header />
      <section className="min-h-screen py-16 px-4 bg-[#f3e8ff]">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-800 mb-4">
            ✍️ Most Inspiring Authors on MakeOver
          </h2>
          <p className="text-purple-700 text-lg">
            Meet the brilliant minds shaping the beauty world with every blog
            post. From skincare guides to bold makeup tutorials, these authors
            keep our readers glowing ✨
          </p>
        </div>

        {/* 🥇 Top Author */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white mx-auto w-full max-w-4xl p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-all"
        >
          <img
            src={authors[0].avatar}
            alt={authors[0].name}
            className="w-28 h-28 rounded-full mx-auto mb-4 object-cover shadow-lg"
          />
          <h3 className="text-2xl font-semibold text-purple-900 mb-1">
            {authors[0].name} <span className="text-yellow-500">🥇</span>
          </h3>
          <p className="text-sm text-gray-600 mb-4">{authors[0].bio}</p>
          <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm max-w-md mx-auto">
            <p>
              📝 <strong>Blogs Written:</strong> {authors[0].blogs}
            </p>
            <p>
              👥 <strong>Followers:</strong> {authors[0].followers}
            </p>
            <p>
              💬 <strong>Comments Received:</strong> {authors[0].comments}
            </p>
            <p>
              🌟 <strong>Community Points:</strong> {authors[0].points}
            </p>
          </div>
        </motion.div>

        {/* 🥈🥉 2nd and 3rd */}
        <div className="flex flex-col md:flex-row gap-8 justify-center mt-16">
          {[authors[1], authors[2]].map((author, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (idx + 1) * 0.2 }}
              viewport={{ once: true }}
              className="bg-white w-full md:w-96 p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all"
            >
              <img
                src={author.avatar}
                alt={author.name}
                className="w-20 h-20 rounded-full mx-auto mb-3 object-cover shadow-md"
              />
              <h3 className="text-xl font-semibold text-purple-900 mb-1">
                {author.name}{" "}
                <span className="text-gray-500">{idx === 0 ? "🥈" : "🥉"}</span>
              </h3>
              <p className="text-sm text-gray-600 mb-3">{author.bio}</p>
              <div className="text-sm space-y-1 text-gray-700">
                <p>📝 Blogs: {author.blogs}</p>
                <p>👥 Followers: {author.followers}</p>
                <p>💬 Comments: {author.comments}</p>
                <p className="text-purple-800 font-medium pt-1">
                  🌟 Points: <span className="font-bold">{author.points}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
