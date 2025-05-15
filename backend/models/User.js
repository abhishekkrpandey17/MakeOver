import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: String,
    avatar: String,
    details: String,
    gender: String,
    phone: String,
    preferences: [String],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    likedBlogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog" }],
    dislikedBlogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    role: { type: String, default: "user" },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
