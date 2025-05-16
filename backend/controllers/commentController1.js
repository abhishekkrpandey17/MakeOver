import { Comment } from "../models/commentAuthorModel.js";

export const createComment = async (req, res) => {
  try {
    const data = await Comment.create(req.body);
    res.status(201).json({ success: true, data });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getAllComments = async (req, res) => {
  try {
    const data = await Comment.find();
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getCommentById = async (req, res) => {
  try {
    const data = await Comment.findById(req.params.id);
    if (!data)
      return res
        .status(404)
        .json({ success: false, message: "Comment not found" });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateComment = async (req, res) => {
  try {
    const data = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ success: true, data });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Comment deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
