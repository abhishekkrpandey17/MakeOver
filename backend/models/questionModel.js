import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  question: { type: String, required: true },
  answers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Answer" }],
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
}, { timestamps: true });

export const Question = mongoose.model("Question", questionSchema);