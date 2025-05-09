// components/JoinCommunityBanner.tsx
"use client";

import React from "react";
import Link from "next/link";

export default function JoinCommunityBanner() {
  return (
    <section className="bg-darkviolet   w-[96vw] lg:w-[68vw] rounded-2xl  text-white px-1 md:px-6 py-10 md:py-14 text-center">
      <div className=" w-[96vw] lg:w-[68vw] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join Our Community
        </h2>
        <p className="text-sm p-2 px-5 leading-7 lg:text-lg  font-light mb-6">
          Connect with beauty enthusiasts, ask questions, share your routines,
          and follow your favorite creators.
        </p>
        <Link href="/community">
          <button className="bg-white text-[#933194] font-semibold px-6 py-3 rounded-full hover:bg-[#b577bd] hover:text-white transition-all duration-300">
            Join Now
          </button>
        </Link>
      </div>
    </section>
  );
}
