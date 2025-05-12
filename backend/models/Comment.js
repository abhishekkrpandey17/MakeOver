import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  blogId: { type: mongoose.Schema.Types.ObjectId, ref: "Blog" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  comment: String,
  likes: [String],
  dislikes: [String],
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Reply" }]
}, { timestamps: true });

export const Comment = mongoose.model("Comment", commentSchema);
