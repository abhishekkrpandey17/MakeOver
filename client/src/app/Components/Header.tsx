"use client";
import React, { useState, useEffect } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Modal from "react-modal";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

Modal.setAppElement("body");

const Header = () => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_APP_API_TEST_URL;
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkLogin = async () => {
      try {
        await axios.post(
          `${API_BASE_URL}api/v1/users/isLogin`,
          {},
          { withCredentials: true }
        );
        setIsLoggedIn(true);
      } catch {
        setIsLoggedIn(false);
      }
    };
    checkLogin();
  });

  const toggleDrawer = () => setIsOpen((prev) => !prev);
  const toggleModal = () => setIsModalOpen((prev) => !prev);
  const toggleForm = () => setIsSignIn((prev) => !prev);

  const handleLogout = async () => {
    try {
      await axios.post(
        `${API_BASE_URL}api/v1/users/logout`,
        {},
        { withCredentials: true }
      );
      alert("Logged out successfully");
      setIsLoggedIn(false);
      setShowMenu(false);
      router.refresh();
    } catch {
      alert("Logout failed");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    interface FormData {
      email: string;
      password: string;
      name?: string;
      phone?: string;
      gender?: string;
      preferences?: string[];
    }

    const data: FormData = {
      email: form.email.value,
      password: form.password.value,
    };

    if (!isSignIn) {
      const nameInput = form.elements.namedItem(
        "name"
      ) as HTMLInputElement | null;
      data.name = nameInput?.value || "";
      data.phone = form.phone?.value;
      data.gender = form.gender?.value;
      data.preferences = [form.preference?.value].filter((p) => p);
    }

    const endpoint = isSignIn
      ? `${API_BASE_URL}api/v1/users/login`
      : `${API_BASE_URL}api/v1/users/register`;

    try {
      const res = await axios.post(endpoint, data, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      });
      alert(res.data.message || "Success");
      setIsLoggedIn(true);
      setIsModalOpen(false);
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response?.data?.message) {
        alert(err.response.data.message);
      } else {
        alert("Something went wrong");
      }
    }
  };

  return (
    <header className="bg-[#dbc3eb] text-[#171619] px-4 py-3 shadow-md pb-4 pt-4">
      <div className="max-w-8xl mx-auto flex justify-between items-center border-gray-500 border-b-1 pb-3">
        <div className="flex gap-x-1 justify-center items-center font-lora">
          <Image
            src="/images/logo3.png"
            height={60}
            width={60}
            alt="Logo"
            className="hidden lg:block"
          />
          <Image
            src="/images/logo3.png"
            height={56}
            width={56}
            alt="Logo"
            className="block lg:hidden"
          />
          <p className="bg-darkviolet p-2 px-5 py-1 text-white rounded-xl">
            Blogs
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex items-center space-x-4 relative">
          {!isLoggedIn ? (
            <>
              <button
                onClick={toggleModal}
                className="text-sm px-5 py-2 bg-[#933194] text-white rounded-full"
              >
                Sign in
              </button>
              <button className="text-sm px-5 py-2 border border-[#933194] text-[#933194] rounded-full">
                Search
              </button>
            </>
          ) : (
            <>
              <Image
                src="/images/user.png"
                alt="Profile"
                width={36}
                height={36}
                className="rounded-full cursor-pointer"
                onClick={() => setShowMenu((prev) => !prev)}
              />
              {showMenu && (
                <div className="absolute top-12 right-0 w-40 bg-white shadow-md rounded-lg z-50 text-sm">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-100 text-darkviolet"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left text-red-600 px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Mobile */}
        {!isLoggedIn ? (
          <button className="lg:hidden" onClick={toggleDrawer}>
            <Menu size={28} />
          </button>
        ) : (
          <div className="relative lg:hidden ml-2">
            <Image
              src="/images/user.png"
              alt="Profile"
              width={36}
              height={36}
              className="rounded-full cursor-pointer"
              onClick={() => setShowMenu((prev) => !prev)}
            />
            {showMenu && (
              <div className="absolute top-12 right-0 w-40 bg-white shadow-md rounded-lg z-50 text-sm">
                <Link
                  href="/profile"
                  className="block px-4 py-2 hover:bg-gray-100 text-darkviolet"
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    setShowMenu(false);
                    handleLogout();
                  }}
                  className="w-full text-left text-red-600 px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Drawer */}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="bg-[#dbc3eb] p-4"
      >
        <div className="flex flex-col space-y-4 text-md font-medium text-[#6c6374]">
          <div className="flex justify-end mb-2">
            <button onClick={toggleDrawer}>
              <X size={24} className="text-[#933194]" />
            </button>
          </div>
          <Link href="/" onClick={toggleDrawer}>
            Home
          </Link>
          <Link href="/allauthors" onClick={toggleDrawer}>
            Authors
          </Link>
          <Link href="/allblogs" onClick={toggleDrawer}>
            Blogs
          </Link>
          <Link href="/community" onClick={toggleDrawer}>
            Community
          </Link>
          <Link href="/findservice" onClick={toggleDrawer}>
            Find service
          </Link>
          {!isLoggedIn && (
            <button
              className="w-full mt-4 pt-3 px-4 py-2 bg-[#933194] text-white rounded-full hover:border-white border"
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => setIsModalOpen(true), 250);
              }}
            >
              Sign in
            </button>
          )}
        </div>
      </Drawer>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        className="relative bg-white w-[90%] max-w-md mx-auto lg:mt-[4vh] p-6 rounded-xl shadow-xl outline-none"
        overlayClassName="fixed inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-center z-100"
      >
        <button
          onClick={toggleModal}
          className="absolute top-4 right-4 text-[#933194] hover:text-[#b577bd]"
        >
          <X size={20} />
        </button>
        <h2 className="text-xl font-bold text-center text-[#933194] mb-4">
          {isSignIn ? "Sign In" : "Register"}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isSignIn && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full border px-4 py-2 rounded-lg"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full border px-4 py-2 rounded-lg"
              />
              <div className="flex space-x-4">
                {["Male", "Female", "Other"].map((g) => (
                  <label key={g} className="flex items-center space-x-1">
                    <input type="radio" name="gender" value={g} />
                    <span>{g}</span>
                  </label>
                ))}
              </div>
              <select
                name="preference"
                className="w-full border px-4 py-2 rounded-lg"
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
            name="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded-lg"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border px-4 py-2 rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-[#933194] text-white py-2 rounded-full hover:bg-[#b577bd] transition"
          >
            {isSignIn ? "Sign In" : "Register"}
          </button>
        </form>
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
