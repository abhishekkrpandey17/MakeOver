"use client";
import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Menu } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen((prev) => !prev);

  return (
    <header className="bg-[#dbc3eb] text-[#171619] px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-[#933194]">Blogs.</div>
        <nav className="hidden md:flex space-x-6 text-[#6c6374] font-medium">
          <Link href="/">Home</Link>
          <Link href="/trends">Trends</Link>
          <Link href="/how-to">How-To</Link>
          <Link href="/reviews">Reviews</Link>
        </nav>
        <div className="hidden md:flex space-x-4">
          <button className="text-sm px-4 py-1 bg-[#933194] text-white rounded-full">
            Sign in
          </button>
          <button className="text-sm px-4 py-1 border border-[#933194] text-[#933194] rounded-full">
            Search
          </button>
        </div>
        <button className="md:hidden" onClick={toggleDrawer}>
          <Menu size={28} />
        </button>
      </div>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="left" className="bg-[#dbc3eb]">
        <div className="p-6 space-y-4 text-lg font-medium text-[#6c6374]">
          <Link href="/" onClick={toggleDrawer}>Home</Link>
          <Link href="/trends" onClick={toggleDrawer}>Trends</Link>
          <Link href="/how-to" onClick={toggleDrawer}>How-To</Link>
          <Link href="/reviews" onClick={toggleDrawer}>Reviews</Link>
          <button className="w-full mt-4 px-4 py-2 bg-[#933194] text-white rounded-full">
            Sign in
          </button>
          <button className="w-full px-4 py-2 border border-[#933194] text-[#933194] rounded-full">
            Search
          </button>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
