import { Answer } from "../models/answerModel.js";

export const createAnswer = async (req, res) => {
  try {
    const data = await Answer.create(req.body);
    res.status(201).json({ success: true, data });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getAllAnswers = async (req, res) => {
  try {
    const data = await Answer.find();
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getAnswerById = async (req, res) => {
  try {
    const data = await Answer.findById(req.params.id);
    if (!data)
      return res
        .status(404)
        .json({ success: false, message: "Answer not found" });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateAnswer = async (req, res) => {
  try {
    const data = await Answer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ success: true, data });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const deleteAnswer = async (req, res) => {
  try {
    await Answer.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Answer deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
