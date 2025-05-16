import { Author } from "../models/Author.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

// Register new author (no password)
export const registerAuthor = async (req, res) => {
  try {
    const { uid, name, email, experience, bio, interest } = req.body;

    // Check for existing UID or email
    const existing = await Author.findOne({ $or: [{ uid }, { email }] });
    if (existing)
      return res.status(400).json({ message: "UID or Email already used" });

    const author = new Author({ uid, name, email, experience, bio, interest });
    await author.save();

    res.status(201).json({ success: true, author });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Login with uid + email (no password)
export const loginAuthor = async (req, res) => {
  try {
    const { uid, email } = req.body;

    const author = await Author.findOne({ uid, email });
    if (!author)
      return res.status(404).json({ message: "Invalid UID or Email" });

    const token = jwt.sign({ id: author._id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("authorToken", token, {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({ success: true, token, author });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
// Logout (clear cookie)
export const logoutAuthor = (req, res) => {
  res.clearCookie("authorToken");
  res.json({ success: true, message: "Logged out" });
};

// Get all authors (public)
export const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.json({ success: true, authors });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get author by ID
export const getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) return res.status(404).json({ message: "Author not found" });
    res.json({ success: true, author });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Update author (protected)
export const updateAuthor = async (req, res) => {
  try {
    const { name, bio, experience } = req.body;
    const updated = await Author.findByIdAndUpdate(
      req.params.id,
      { name, bio, experience },
      { new: true }
    );
    res.json({ success: true, updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Delete author (protected)
export const deleteAuthor = async (req, res) => {
  try {
    await Author.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Author deleted" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
