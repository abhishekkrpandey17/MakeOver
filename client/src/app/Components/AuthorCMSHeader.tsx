"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const AuthorCMSHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const API = process.env.NEXT_PUBLIC_APP_API_TEST_URL;

  // Check if author is logged in
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await axios.get(`${API}api/v1/authors/verify`, {
          withCredentials: true,
        });
        if (res.data.success) setIsLoggedIn(true);
      } catch {
        setIsLoggedIn(false);
      }
    };
    checkLogin();
  });

  // Logout
  const handleLogout = async () => {
    try {
      await axios.post(
        `${API}api/v1/authors/logout`,
        {},
        { withCredentials: true }
      );

      setIsLoggedIn(false);
      router.push("/authors");
    } catch {
      alert("Logout failed");
    }
  };

  return (
    <header className="w-full bg-[#933194] text-white py-4 px-6 flex justify-between items-center shadow-md z-50">
      <h1 className="text-lg font-semibold tracking-wide">📚 Author CMS</h1>

      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="bg-white text-[#933194] px-4 py-2 rounded-full font-medium hover:bg-purple-100 transition"
        >
          Logout
        </button>
      ) : (
        <div className="flex space-x-3">
          <button
            onClick={() => router.push("/author/login")}
            className="bg-white text-[#933194] px-4 py-2 rounded-full hover:bg-purple-100"
          >
            Sign in
          </button>
          <button className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-[#933194] transition">
            Search
          </button>
        </div>
      )}
    </header>
  );
};

export default AuthorCMSHeader;
