"use client";
import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Modal from "react-modal";
import Image from "next/image";

Modal.setAppElement("body");

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleDrawer = () => setIsOpen((prev) => !prev);
  const toggleModal = () => setIsModalOpen((prev) => !prev);
  const toggleForm = () => setIsSignIn((prev) => !prev);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Authors", href: "/allauthors" },
    { label: "Blogs", href: "/allblogs" },
    { label: "Community", href: "/community" },
    { label: "Find service", href: "/findservice" },
  ];

  return (
    <header className="bg-[#dbc3eb] text-[#171619] px-4 py-3 shadow-md pb-4 pt-4">
      <div className="max-w-8xl mx-auto flex justify-between items-center border-gray-500 border-b-1 pb-3">
        <div className="text-2xl font-bold text-[#933194]">Blogs.</div>

        <nav className="hidden ml-8 md:flex space-x-8 text-darkviolet font-medium">
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

        <div className="hidden md:flex space-x-4">
          <button
            className="text-sm pb-2 pt-2 px-5 py-5 bg-[#933194] text-white rounded-full hover:border-white border transition-colors duration-200"
            onClick={toggleModal}
          >
            Sign in
          </button>
          <button className="text-sm pb-2 pt-2 px-5 py-5 border border-[#933194] text-[#933194] rounded-full hover:border-white transition-colors duration-200">
            Search
          </button>
        </div>

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
        <div className="flex flex-col p-6 space-y-4 text-md font-medium text-[#6c6374]">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={toggleDrawer}>
              {item.label}
            </Link>
          ))}
          <button
            className="w-full mt-4 pt-3 px-4 py-2 bg-[#933194] text-white rounded-full hover:border-white border transition-colors duration-200"
            onClick={() => {
              toggleDrawer();
              toggleModal();
            }}
          >
            Sign in
          </button>
          <button className="w-full pt-3 px-4 py-2 border border-[#933194] text-[#933194] rounded-full hover:border-white transition-colors duration-200">
            Search
          </button>
        </div>
      </Drawer>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        className="relative bg-white w-[90%] max-w-md mx-auto lg:mt-[4vh] p-6 rounded-xl shadow-xl outline-none"
        overlayClassName="fixed inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-center z-1000"
      >
        {/* Close Icon */}
        <button
          onClick={toggleModal}
          className="absolute top-4 right-4 text-[#933194] hover:text-[#b577bd]"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold text-center text-[#933194] mb-4">
          {isSignIn ? "Sign In" : "Register"}
        </h2>

        <form className="space-y-4">
          {!isSignIn && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#933194]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#933194]"
              />
              <div className="flex space-x-4">
                <label className="flex items-center space-x-1">
                  <input type="radio" name="gender" value="Male" />
                  <span>Male</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="radio" name="gender" value="Female" />
                  <span>Female</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="radio" name="gender" value="Other" />
                  <span>Other</span>
                </label>
              </div>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#933194]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Preference
                </option>
                <option value="dermat">Dermat</option>
                <option value="cosmetic">Cosmetic</option>
                <option value="cosmology">Cosmology</option>
                <option value="hair">Hair</option>
                <option value="skin">Skin</option>
              </select>
            </>
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#933194]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#933194]"
          />
          <button
            type="submit"
            className="w-full bg-[#933194] text-white py-2 rounded-full hover:bg-[#b577bd] transition"
          >
            {isSignIn ? "Sign In" : "Register"}
          </button>
        </form>

        <div className="my-4 text-center text-sm text-gray-600">or</div>

        <button className="w-full border border-gray-300 py-2 rounded-full flex justify-center items-center gap-2 hover:bg-gray-50 transition">
          <Image
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span>Continue with Google</span>
        </button>

        <p className="text-sm text-center text-[#6c6374] mt-4">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={toggleForm}
            className="text-[#933194] underline hover:text-[#b577bd]"
          >
            {isSignIn ? "Register here" : "Sign in"}
          </button>
        </p>
      </Modal>
    </header>
  );
};

export default Header;
