"use client";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const users = [
  {
    name: "Ayesha Singh",
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
    questions: 42,
    answers: 36,
    replies: 18,
    likes: 128,
    points: 455,
  },
  {
    name: "Pooja Rana",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    questions: 33,
    answers: 29,
    replies: 14,
    likes: 105,
    points: 378,
  },
  {
    name: "Sana Mehta",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    questions: 50,
    answers: 40,
    replies: 25,
    likes: 152,
    points: 490,
  },
];

export default function UserTopContributors() {
  return (
    <>
      <Header />
      <section className="min-h-screen py-16 px-4 bg-[#f3e8ff]">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-800 mb-4">
            🌟 Meet Our Most Active Beauty Enthusiasts
          </h2>
          <p className="text-purple-700 text-lg">
            These top contributors are helping others every day by sharing
            beauty advice, answering questions, and spreading positivity 💖
          </p>
        </div>

        {/* 🥇 First Place */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white mx-auto w-full max-w-4xl p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-all"
        >
          <img
            src={users[0].avatar}
            alt={users[0].name}
            className="w-28 h-28 rounded-full mx-auto mb-4 object-cover shadow-lg"
          />
          <h3 className="text-2xl font-semibold text-purple-900 mb-4">
            {users[0].name} <span className="text-yellow-500">🥇</span>
          </h3>
          <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm max-w-md mx-auto">
            <p>
              💬 <strong>Questions:</strong> {users[0].questions}
            </p>
            <p>
              🧠 <strong>Answers:</strong> {users[0].answers}
            </p>
            <p>
              🔁 <strong>Replies:</strong> {users[0].replies}
            </p>
            <p>
              ❤️ <strong>Likes:</strong> {users[0].likes}
            </p>
            <p className="col-span-2 text-purple-800 font-medium mt-2">
              ⭐ Community Points:{" "}
              <span className="font-bold">{users[0].points}</span>
            </p>
          </div>
        </motion.div>

        {/* 🥈🥉 2nd and 3rd */}
        <div className="flex flex-col md:flex-row gap-8 justify-center mt-16">
          {[users[1], users[2]].map((user, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (idx + 1) * 0.2 }}
              viewport={{ once: true }}
              className="bg-white w-full md:w-96 p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover shadow-md"
              />
              <h3 className="text-xl font-semibold text-purple-900 mb-3">
                {user.name}{" "}
                <span className="text-gray-500">{idx === 0 ? "🥈" : "🥉"}</span>
              </h3>
              <div className="text-sm space-y-1 text-gray-700">
                <p>💬 Questions: {user.questions}</p>
                <p>🧠 Answers: {user.answers}</p>
                <p>🔁 Replies: {user.replies}</p>
                <p>❤️ Likes: {user.likes}</p>
                <p className="text-purple-800 font-medium pt-2">
                  ⭐ Community Points:{" "}
                  <span className="font-bold">{user.points}</span>
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
