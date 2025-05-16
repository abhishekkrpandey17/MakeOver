import { Question } from "../models/questionModel.js";

export const createQuestion = async (req, res) => {
  try {
    const data = await Question.create(req.body);
    res.status(201).json({ success: true, data });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getAllQuestions = async (req, res) => {
  try {
    const data = await Question.find();
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getQuestionById = async (req, res) => {
  try {
    const data = await Question.findById(req.params.id);
    if (!data)
      return res
        .status(404)
        .json({ success: false, message: "Question not found" });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateQuestion = async (req, res) => {
  try {
    const data = await Question.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ success: true, data });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const deleteQuestion = async (req, res) => {
  try {
    await Question.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Question deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
