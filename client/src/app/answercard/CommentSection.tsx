"use client";
import React, { useState } from "react";
import { MessageCircle, UserCircle, CornerDownRight } from "lucide-react";

const CommentSection = () => {
  const [comments, setComments] = useState([
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
  ]);

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-6 mt-8 space-y-6">
      {/* Header */}
      <h3 className="text-xl font-semibold text-pink-700 flex items-center gap-2">
        <MessageCircle className="w-5 h-5" />
        Comments & Replies
      </h3>

      {/* Comment input */}
      <div className="bg-pink-50 border border-pink-100 p-4 rounded-xl">
        <textarea
          rows={3}
          placeholder="Write your comment..."
          className="w-full rounded-md border border-pink-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
        />
        <button
          className="mt-2 bg-pink-600 hover:bg-pink-700 text-white text-sm px-4 py-2 rounded-md transition"
          onClick={() => {
            setComments([
              ...comments,
              {
                id: comments.length + 1,
                user: "Anonymous",
                date: new Date().toLocaleDateString(),
                text: "This is a new comment!",
                replies: [],
              },
            ]);
          }}
        >
          Post Comment
        </button>
      </div>

      {/* Comments */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-pink-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <UserCircle className="w-5 h-5 text-pink-400" />
              <p className="text-sm font-medium text-gray-800">
                {comment.user}
              </p>
              <span className="text-xs text-gray-400 ml-2">{comment.date}</span>
            </div>
            <p className="text-sm text-gray-700">{comment.text}</p>

            {/* Replies */}
            {comment.replies.length > 0 && (
              <div className="mt-3 ml-5 space-y-2 border-l-2 border-pink-200 pl-4">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <CornerDownRight className="w-4 h-4 text-pink-300" />
                      <p className="text-sm font-medium text-gray-800">
                        {reply.user}
                      </p>
                      <span className="text-xs text-gray-400 ml-2">
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
  );
};

export default CommentSection;
