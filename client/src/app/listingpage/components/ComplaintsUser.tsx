"use client";

export default function ComplaintDetailPage() {
  // Dummy data for illustration
  const complaint = {
    business: "Blush & Bloom",
    submitted: "May 21, 2025",
    type: "Rude Staff",
    message:
      "I was overcharged and the staff was rude when asked about the service charges.",
    status: "Resolved",
    actionTaken:
      "The staff in question has been issued a warning. The business has committed to better service practices.",
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-purple-200">
        <h1 className="text-3xl font-extrabold text-purple-700 mb-2 flex items-center gap-2">
          🛠 Complaint Details
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Submitted on:{" "}
          <span className="font-medium">{complaint.submitted}</span>
        </p>

        <div className="space-y-4 text-gray-800">
          <div>
            <p className="font-semibold text-purple-800">Business:</p>
            <p className="bg-purple-50 px-4 py-2 rounded-lg border border-purple-100">
              {complaint.business}
            </p>
          </div>

          <div>
            <p className="font-semibold text-purple-800">Complaint Type:</p>
            <p className="bg-purple-50 px-4 py-2 rounded-lg border border-purple-100">
              {complaint.type}
            </p>
          </div>

          <div>
            <p className="font-semibold text-purple-800">Message:</p>
            <p className="bg-purple-50 px-4 py-3 rounded-lg border border-purple-100 text-gray-700">
              {complaint.message}
            </p>
          </div>

          <div>
            <p className="font-semibold text-green-800">
              Action Taken by MakeOver:
            </p>
            <p className="bg-green-50 px-4 py-3 rounded-lg border border-green-200 text-green-900 shadow-sm">
              {complaint.actionTaken}
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <span
            className={`px-5 py-1 text-sm font-semibold rounded-full shadow-sm ${
              complaint.status === "Resolved"
                ? "bg-green-100 text-green-700"
                : complaint.status === "Pending"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {complaint.status}
          </span>
        </div>
      </div>
    </main>
  );
}
