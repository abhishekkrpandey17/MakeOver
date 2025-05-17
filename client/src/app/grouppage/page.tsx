import React from "react";
import Image from "next/image";
import { FaHeart, FaReply } from "react-icons/fa";
import { Badge } from "../Components/Badge";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const GroupPage = () => {
  return (
    <>
      <Header />
      <div className="bg-[#F3DDF9] min-h-screen p-6 font-sans">
        {/* Group Header */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-2xl shadow-md">
          <div className="flex items-center gap-6">
            <Image
              src="/images/cos1.jpeg"
              alt="Wellness Group"
              width={100}
              height={100}
              className="rounded-full"
            />
            <div>
              <h2 className="text-3xl font-bold text-[#56134C]">
                Wellness Warriors
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Wellness encompasses energies, and the state of hair or skin.
              </p>
              <div className="flex gap-4 mt-2 text-sm text-gray-700">
                <span>💬 157 Conversations</span>
                <span>🖼️ 30 Photos</span>
                <span>👥 15,616 Members</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button className="bg-[#6A1B9A] text-white px-4 py-2 rounded-lg hover:bg-[#4A148C]">
              Join
            </button>
            <button className="border border-[#6A1B9A] text-[#6A1B9A] px-4 py-2 rounded-lg hover:bg-[#F3E5F5]">
              Start a Conversation
            </button>
          </div>
        </div>

        {/* Posts Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-[#56134C] mb-4">
            All Posts in this Group
          </h3>

          {/* Post Card */}
          <div className="bg-white p-5 rounded-xl shadow-md mb-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-black text-white text-xs px-2 py-1 pr-4rounded">
                Featured
              </span>
              <span className="text-sm text-gray-600">
                in Wellness Warriors
              </span>
            </div>
            <h4 className="text-xl font-bold text-[#56134C] mb-2">
              Wellness In Progress: May 2025
            </h4>
            <p className="text-sm text-gray-700 mb-3 pr-3">
              Hello, BIC! We have another month of wellness bingo! May is Mental
              Health Awareness Month, and, for this month, we’re adding a few...
            </p>
            <Image
              src="/images/cos2.avif"
              alt="Wellness Bingo"
              width={600}
              height={400}
              className="rounded-lg mb-3"
            />
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge>Emotional Wellness</Badge>
              <Badge>Mental Wellness</Badge>
              <Badge>Physical Wellness</Badge>
              <Badge>Self-Care</Badge>
            </div>
            <div className="flex items-center gap-6 text-gray-700">
              <div className="flex items-center gap-1">
                <FaHeart /> 14
              </div>
              <div className="flex items-center gap-1">
                <FaReply /> 61 Replies
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-md mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-black text-white text-xs px-2 py-1 pr-4rounded">
              Featured
            </span>
            <span className="text-sm text-gray-600">in Wellness Warriors</span>
          </div>
          <h4 className="text-xl font-bold text-[#56134C] mb-2">
            Wellness In Progress: May 2025
          </h4>
          <p className="text-sm text-gray-700 mb-3 pr-3">
            Hello, BIC! We have another month of wellness bingo! May is Mental
            Health Awareness Month, and, for this month, we’re adding a few...
          </p>
          <Image
            src="/images/cos2.avif"
            alt="Wellness Bingo"
            width={700}
            height={700}
            className="rounded-lg mb-3"
          />
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge>Emotional Wellness</Badge>
            <Badge>Mental Wellness</Badge>
            <Badge>Physical Wellness</Badge>
            <Badge>Self-Care</Badge>
          </div>
          <div className="flex items-center gap-6 text-gray-700">
            <div className="flex items-center gap-1">
              <FaHeart /> 14
            </div>
            <div className="flex items-center gap-1">
              <FaReply /> 61 Replies
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default GroupPage;
