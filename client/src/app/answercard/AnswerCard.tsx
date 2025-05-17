"use client";
import React from "react";
import {
  ThumbsUp,
  ThumbsDown,
  UserCircle,
  MessageCircle,
  CornerDownRight,
} from "lucide-react";

const AnswerCard = () => {
  const comments = [
    {
      id: 1,
      user: "Emily Rose",
      date: "May 17, 2025",
      text: "Loved this tip! I always struggled with eyeliner.",
      replies: [
        {
          id: 11,
          user: "Lola Carson",
          date: "May 17, 2025",
          text: "So glad it helped, Emily! Try using a light hand too 💕",
        },
      ],
    },
    {
      id: 2,
      user: "Priya Singh",
      date: "May 17, 2025",
      text: "Should we use gel or liquid for beginners?",
      replies: [],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6e8fb] py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-[30px] shadow-lg p-8 space-y-8 transition-all duration-300">
        {/* Question */}
        <div>
          <h2 className="text-xl font-bold text-[#933194] flex items-center gap-2">
            ❓ Question:
          </h2>
          <p className="text-gray-800 mt-2 text-lg leading-relaxed">
            How do I get a sharp, clean wing with liquid eyeliner?
          </p>
        </div>

        {/* Answer */}
        <div className="bg-[#f5d5f7] border border-[#e7b6e9] p-6 rounded-2xl">
          <h3 className="text-sm font-semibold text-[#933194] mb-2">
            💡 Answer by the Author:
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            To achieve a clean wing, start by drawing a guide with a pencil
            liner, then trace over it with liquid eyeliner in small strokes. Use
            tape or a card edge for symmetry, and finish by cleaning up the
            edges with a pointed cotton swab dipped in micellar water.
          </p>
        </div>

        {/* Author & Reactions */}
        <div className="flex items-center justify-between border-t pt-4">
          <div className="flex items-center gap-3">
            <UserCircle className="w-6 h-6 text-[#933194]" />
            <div className="text-sm">
              <p className="font-medium text-gray-900">Lola Carson</p>
              <p className="text-xs text-gray-500">
                Answered on April 17, 2024
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-500">
            <button className="flex items-center gap-1 hover:text-[#933194] transition">
              <ThumbsUp className="w-5 h-5" />
              <span className="text-sm">32</span>
            </button>
            <button className="flex items-center gap-1 hover:text-[#933194] transition">
              <ThumbsDown className="w-5 h-5" />
              <span className="text-sm">3</span>
            </button>
          </div>
        </div>

        {/* Comments Section */}
        <div className="space-y-6 border-t pt-6">
          <h3 className="text-lg font-bold text-[#933194] flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Comments & Replies
          </h3>

          <div className="bg-[#f8dcf5] border border-[#e9c4eb] p-4 rounded-xl">
            <textarea
              rows={3}
              placeholder="Write your comment..."
              className="w-full rounded-lg border border-[#e0bfe7] p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#933194] resize-none bg-white"
            />
            <button className="mt-3 bg-[#933194] hover:bg-[#b577bd] text-white text-sm px-5 py-2 rounded-md transition-all duration-200">
              Post Comment
            </button>
          </div>

          {/* Render Comments */}
          <div className="space-y-5">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-[#f9ebf9] p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-1">
                  <UserCircle className="w-5 h-5 text-[#933194]" />
                  <p className="text-sm font-semibold text-gray-800">
                    {comment.user}
                  </p>
                  <span className="text-xs text-gray-500 ml-2">
                    {comment.date}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{comment.text}</p>

                {comment.replies.length > 0 && (
                  <div className="mt-3 ml-4 space-y-3 border-l-2 border-[#e7c5ed] pl-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id}>
                        <div className="flex items-center gap-2 mb-1">
                          <CornerDownRight className="w-4 h-4 text-[#b577bd]" />
                          <p className="text-sm font-medium text-gray-800">
                            {reply.user}
                          </p>
                          <span className="text-xs text-gray-500 ml-2">
                            {reply.date}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700">{reply.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerCard;
