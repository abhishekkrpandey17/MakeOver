import React from "react";

const GroupPage = () => {
  return (
    <div className="bg-[#f4e4f9] min-h-screen">
      <div className="w-full h-[300px] bg-cover bg-center rounded-b-xl" style={{ backgroundImage: "url('/group-banner.jpg')" }}></div>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Complexion Club</h2>
        <p className="mb-6 text-gray-700">
          Discuss everything about skin tones, undertones, and product matches.
        </p>

        <div className="space-y-4">
          <div className="bg-white rounded p-4 shadow">
            <p className="font-semibold">Q: Best way to cover hyperpigmentation?</p>
            <p className="text-sm text-gray-600 mt-1">Posted by @beautylover</p>
          </div>
          <div className="bg-white rounded p-4 shadow">
            <p className="font-semibold">Q: What primer helps oily skin the most?</p>
            <p className="text-sm text-gray-600 mt-1">Posted by @glamgal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupPage;