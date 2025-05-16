import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    commentAuthor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: { type: String, required: true },
    replyTo: { type: mongoose.Schema.Types.ObjectId, ref: "Answer" },
    replies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Reply" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export const Comment = mongoose.model("CommentAuthor", commentSchema);
