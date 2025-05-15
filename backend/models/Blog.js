import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: String,
    content: String,
    images: [String],
    tags: [String],
    likes: [String],
    dislikes: [String],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    link: String,
  },
  { timestamps: true }
);

export const Blog = mongoose.model("Blog", blogSchema);
