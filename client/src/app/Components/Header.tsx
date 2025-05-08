"use client";
import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Menu } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen((prev) => !prev);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Trends", href: "/trends" },
    { label: "How-To", href: "/how-to" },
    { label: "Reviews", href: "/reviews" },
  ];

  return (
    <header className="bg-[#dbc3eb] text-[#171619] px-4 py-3 shadow-md pb-4 pt-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#933194]">Blogs.</div>

        {/* Desktop Nav */}
        <nav className="hidden ml-5 md:flex space-x-8  text-darkviolet font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-transparent hover:border-white hover:text-[#933194] pb-1 transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="text-sm px-4 py-1 bg-[#933194] text-white rounded-full hover:border-white border transition-colors duration-200">
            Sign in
          </button>
          <button className="text-sm px-4 py-1 border border-[#933194] text-[#933194] rounded-full hover:border-white transition-colors duration-200">
            Search
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleDrawer}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="bg-[#dbc3eb]"
      >
        <div className="flex flex-col p-6 space-y-4 text-lg font-medium text-[#6c6374]">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={toggleDrawer}>
              {item.label}
            </Link>
          ))}
          <button className="w-full mt-4 pt-3 px-4 py-2 bg-[#933194] text-white rounded-full hover:border-white border transition-colors duration-200">
            Sign in
          </button>
          <button className="w-full pt-3 px-4 py-2 border border-[#933194] text-[#933194] rounded-full hover:border-white transition-colors duration-200">
            Search
          </button>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
