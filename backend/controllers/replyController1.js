import { Reply } from "../models/replyAuthorModel.js";

export const createReply = async (req, res) => {
  try {
    const data = await Reply.create(req.body);
    res.status(201).json({ success: true, data });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getAllReplys = async (req, res) => {
  try {
    const data = await Reply.find();
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getReplyById = async (req, res) => {
  try {
    const data = await Reply.findById(req.params.id);
    if (!data)
      return res
        .status(404)
        .json({ success: false, message: "Reply not found" });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateReply = async (req, res) => {
  try {
    const data = await Reply.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ success: true, data });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const deleteReply = async (req, res) => {
  try {
    await Reply.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Reply deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
