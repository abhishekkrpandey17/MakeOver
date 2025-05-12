import mongoose from 'mongoose';

const replySchema = new mongoose.Schema({
  blogId: { type: mongoose.Schema.Types.ObjectId, ref: "Blog" },
  commentId: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
  text: String,
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  likes: [String],
  dislikes: [String]
}, { timestamps: true });

export const Reply = mongoose.model("Reply", replySchema);
