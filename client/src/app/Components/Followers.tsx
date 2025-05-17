"use client";
import React, { useEffect, useState } from "react";

type Follower = {
  name: string;
  email: string;
  phone: string;
  avatar: string;
};

const mockFollowers: Follower[] = [
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "+91-9090909090",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "James Lee",
    email: "james@example.com",
    phone: "+91-9812345678",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    name: "Priya Singh",
    email: "priya@example.com",
    phone: "+91-9123456780",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    name: "Raj Verma",
    email: "raj@example.com",
    phone: "+91-9345678901",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

const Followers = () => {
  const [followers, setFollowers] = useState<Follower[]>([]);

  useEffect(() => {
    setTimeout(() => setFollowers(mockFollowers), 1000);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {followers.length === 0 ? (
        <p className="text-center col-span-2 text-[#4b1a54]">
          Loading followers...
        </p>
      ) : (
        followers.map((follower, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4"
          >
            <img
              src={follower.avatar}
              alt={follower.name}
              className="w-14 h-14 rounded-full border-2 border-[#b97ec5]"
            />
            <div>
              <h4 className="font-bold text-[#4b1a54]">{follower.name}</h4>
              {/* <p className="text-sm text-gray-600">{follower.email}</p>
              <p className="text-sm text-gray-500">{follower.phone}</p> */}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Followers;
