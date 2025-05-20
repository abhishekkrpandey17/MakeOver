"use client";

import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiUser,
  FiMapPin,
  FiImage,
  FiHome,
  FiBriefcase,
} from "react-icons/fi";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";

export default function BusinessRegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    city: "",
    state: "",
    address: "",
  });

  const [storeImage, setStoreImage] = useState<File | null>(null);
  const [staffDetails, setStaffDetails] = useState([
    { name: "", role: "", image: null as File | null },
  ]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleStoreImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setStoreImage(file);
  };

  const handleStaffChange = (
    index: number,
    field: "name" | "role" | "image",
    value: string | React.ChangeEvent<HTMLInputElement>
  ) => {
    const updated = [...staffDetails];
    if (field === "image") {
      if (typeof value !== "string" && value.target.files) {
        updated[index][field] = value.target.files[0] || null;
      }
    } else {
      updated[index][field] = typeof value === "string" ? value : "";
    }
    setStaffDetails(updated);
  };

  const addStaff = () => {
    setStaffDetails([...staffDetails, { name: "", role: "", image: null }]);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-[#fce7fe] to-white py-12 px-4">
        <div className="max-w-3xl mx-auto bg-white shadow-2xl p-8 rounded-3xl">
          <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">
            💼 Register Your Beauty Business
          </h1>

          <form className="space-y-6">
            {/* Basic Info */}
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                <FiHome /> Business Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Glamour Glow Studio"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fuchsia-400"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                  <FiMail /> Business Email
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-400"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                  <FiPhone /> Phone Number
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-400"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                <FiUser /> Business Category
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-fuchsia-400"
              >
                <option value="">Select Category</option>
                <option value="Salon">Salon</option>
                <option value="Parlour">Parlour</option>
                <option value="Spa">Spa</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                  <FiMapPin /> City
                </label>
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-400"
                />
              </div>
              <div>
                <label className="text-sm text-gray-700 mb-1 block">
                  State
                </label>
                <input
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-400"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-700 mb-1 block">
                Full Address
              </label>
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Street, Area, Landmark"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-400"
              />
            </div>

            {/* Store Image */}
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                <FiImage /> Upload Store Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleStoreImage}
                className="w-full text-sm file:px-4 file:py-2 file:bg-pink-100 file:text-pink-700 file:rounded-full file:border-0 hover:file:bg-pink-200"
              />
              {storeImage && (
                <img
                  src={URL.createObjectURL(storeImage)}
                  alt="Preview"
                  className="w-28 h-28 mt-2 object-cover rounded-xl border shadow"
                />
              )}
            </div>

            {/* Staff Section */}
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold text-purple-700 flex items-center gap-2">
                <FiBriefcase /> Add Staff Details
              </h3>
              {staffDetails.map((staff, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-purple-50 p-4 rounded-lg"
                >
                  <input
                    type="text"
                    placeholder="Staff Name"
                    value={staff.name}
                    onChange={(e) =>
                      handleStaffChange(index, "name", e.target.value)
                    }
                    className="px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-purple-400"
                  />
                  <input
                    type="text"
                    placeholder="Staff Role"
                    value={staff.role}
                    onChange={(e) =>
                      handleStaffChange(index, "role", e.target.value)
                    }
                    className="px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-purple-400"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleStaffChange(index, "image", e)}
                    className="text-sm file:px-3 file:py-2 file:bg-purple-100 file:text-purple-700 file:rounded-full file:border-0 hover:file:bg-purple-200"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={addStaff}
                className="px-4 py-2 text-sm bg-fuchsia-100 text-fuchsia-700 rounded-full hover:bg-fuchsia-200"
              >
                + Add Another Staff
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 mt-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold rounded-full hover:shadow-lg transition"
            >
              💌 Register Business Now
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
