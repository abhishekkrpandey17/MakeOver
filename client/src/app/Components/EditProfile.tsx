'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';

const EditProfilePage = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div className="lg:bg-[#dbc3eb] lg:flex justify-center">
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: -40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-[#dbc3eb] py-10 px-4 flex items-center justify-center"
      >
        <div className="w-full max-w-5xl bg-white rounded-2xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 shadow-lg">

          {/* Mobile First - Heading + Profile Card */}
          <div className="lg:hidden space-y-6 flex flex-col items-center w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-[#171619]">Edit Profile</h2>
            <div className="flex flex-col items-center bg-[#f7eefe] rounded-xl p-5 w-full">
              <div className="w-24 h-24 relative rounded-full overflow-hidden mb-3">
                <Image src="/images/author1.png" alt="Profile" fill className="object-cover" />
              </div>
              <p className="font-semibold text-[#171619] mb-2">Profile</p>
              <button className="bg-[#b577bd] hover:bg-[#933194] text-white px-4 py-1 rounded-full text-sm font-medium transform transition-transform duration-200 hover:scale-120">
                Change
              </button>
            </div>
          </div>

          {/* Left - Form */}
          <div className="lg:col-span-2">
            <h2 className="hidden lg:block text-2xl md:text-3xl font-bold text-[#171619] mb-4">Edit Profile</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#171619]">Full Name</label>
                <input
                  type="text"
                  defaultValue="Jane Doe"
                  className="w-full px-4 py-2 border border-[#dbc3eb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#933194] bg-[#f9f4fb]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#171619]">Email Address</label>
                <input
                  type="email"
                  defaultValue="jane@example.com"
                  className="w-full px-4 py-2 border border-[#dbc3eb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#933194] bg-[#f9f4fb]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#171619]">Username</label>
                <input
                  type="text"
                  defaultValue="janedoe_"
                  className="w-full px-4 py-2 border border-[#dbc3eb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#933194] bg-[#f9f4fb]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#171619]">Bio</label>
                <textarea
                  rows={3}
                  defaultValue="I'm a beauty enthusiast and makeup artist."
                  className="w-full px-4 py-2 border border-[#dbc3eb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#933194] bg-[#f9f4fb]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#b577bd] text-white py-2 rounded-full font-semibold hover:bg-[#933194] transition-transform duration-200 hover:scale-105"
              >
                Save Changes
              </button>
            </form>

            {/* Mobile Only - Manage Account at Bottom */}
            <div className="lg:hidden bg-[#f7eefe] rounded-xl p-5 w-full text-center mt-8">
              <h4 className="font-semibold text-[#171619] mb-3">Manage Account</h4>
              <div className="flex flex-col gap-1">
                <button className="w-full bg-[#b577bd] hover:bg-[#933194] text-white px-4 py-2 rounded-full text-sm font-medium mb-2 transform transition-transform duration-300 hover:scale-105">
                  Change password
                </button>
                <button className="w-full bg-[#b577bd] hover:bg-[#FF0000] text-white px-4 py-2 rounded-full text-sm font-medium mt-2 transform transition-transform duration-300 hover:scale-105">
                  Delete account
                </button>
              </div>
            </div>
          </div>

          {/* Right - Profile and Actions (Desktop Only) */}
          <div className="hidden lg:flex lg:flex-col lg:space-y-6 lg:items-center">
            <div className="flex flex-col items-center bg-[#f7eefe] rounded-xl p-5 w-full">
              <div className="w-24 h-24 relative rounded-full overflow-hidden mb-3">
                <Image src="/images/author1.png" alt="Profile" fill className="object-cover" />
              </div>
              <p className="font-semibold text-[#171619] mb-2">Profile</p>
              <button className="bg-[#b577bd] hover:bg-[#933194] text-white px-4 py-1 rounded-full text-sm font-medium transform transition-transform duration-200 hover:scale-110">
                Change
              </button>
            </div>

            <div className="bg-[#f7eefe] rounded-xl p-5 w-full text-center">
              <h4 className="font-semibold text-[#171619] mb-3">Manage Account</h4>
              <div className="flex flex-col gap-1">
                <button className="w-full bg-[#b577bd] hover:bg-[#933194] text-white px-4 py-2 rounded-full text-sm font-medium mb-2 transform transition-transform duration-200 hover:scale-105">
                  Change password
                </button>
                <button className="w-full bg-[#b577bd] hover:bg-[#FF0000] text-white px-4 py-2 rounded-full text-sm font-medium mt-2 transform transition-transform duration-200 hover:scale-105">
                  Delete account
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default EditProfilePage;
