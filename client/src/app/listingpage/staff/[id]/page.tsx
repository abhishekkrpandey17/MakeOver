"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import {
  FiArrowLeft,
  FiPhoneCall,
  FiStar,
  FiScissors,
  FiMail,
} from "react-icons/fi";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";

export default function StaffDetailsPage() {
  const { name } = useParams();
  const router = useRouter();

  const staff = {
    name: decodeURIComponent(name as string),
    title: "Bridal Makeup Artist",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 4.9,
    phone: "+91 9000000001",
    email: "ritika@makeover.in",
    bio: `Ritika Mehra is a passionate and certified bridal makeup artist known for enhancing natural beauty with precision. With 6+ years of experience, she has worked on over 300 brides and specializes in soft glam, HD makeup, and traditional Indian looks.`,
    experience: `6+ years in bridal and editorial makeup. Worked with over 300+ brides and fashion campaigns. Previously trained with celebrity stylists and led beauty teams for 25+ wedding events.`,
    services: [
      "Bridal Makeup",
      "Editorial Looks",
      "Party Makeup",
      "Saree Draping",
    ],
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-[#f8e3f9] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden">
          {/* Top Bar */}
          <div className="flex items-center gap-3 px-6 py-4 border-b">
            <button
              className="text-purple-600 hover:text-purple-800 flex items-center gap-1"
              onClick={() => router.back()}
            >
              <FiArrowLeft /> Back
            </button>
            <h2 className="ml-auto font-semibold text-sm text-fuchsia-600">
              Staff Profile
            </h2>
          </div>

          {/* Profile */}
          <div className="p-8 text-center">
            <Image
              src={staff.image}
              alt={staff.name}
              width={120}
              height={120}
              className="mx-auto rounded-full border-4 border-purple-300 object-cover"
            />
            <h1 className="text-2xl font-bold text-purple-800 mt-4">
              Anjali Verma
            </h1>
            <p className="text-sm text-gray-500">Hair Stylist</p>
            <p className="text-yellow-500 flex items-center justify-center gap-1 text-sm mt-1">
              <FiStar /> {staff.rating} / 5
            </p>

            {/* Contact */}
            <div className="flex justify-center gap-6 mt-4 text-sm text-purple-700">
              <p className="flex items-center gap-2">
                <FiPhoneCall /> {staff.phone}
              </p>
              <p className="flex items-center gap-2">
                <FiMail /> {staff.email}
              </p>
            </div>

            {/* Bio */}
            <div className="mt-6 text-gray-700 text-sm leading-relaxed">
              {staff.bio}
            </div>

            {/* Experience */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-purple-700 mb-3">
                💼 Experience
              </h3>
              <p className="text-sm text-gray-700">{staff.experience}</p>
            </div>

            {/* Services */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-purple-700 mb-3">
                ✨ Services Offered
              </h3>
              <ul className="flex flex-wrap justify-center gap-3 text-sm">
                {staff.services.map((service, i) => (
                  <li
                    key={i}
                    className="px-4 py-1 bg-purple-100 text-purple-800 rounded-full flex items-center gap-1"
                  >
                    <FiScissors /> {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <button className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white font-semibold rounded-full hover:shadow-xl transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
