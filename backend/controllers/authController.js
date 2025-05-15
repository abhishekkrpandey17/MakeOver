import { Author } from "../models/Author.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret123";

// Register new author
export const registerAuthor = async (req, res) => {
  try {
    const { uid, name, email, password, experience, bio } = req.body;
    const existing = await Author.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Email already used" });

    const hashed = await bcrypt.hash(password, 10);
    const author = new Author({
      uid,
      name,
      email,
      password: hashed,
      experience,
      bio,
    });
    await author.save();
    res.status(201).json({ success: true, author });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Login author
// Login author
export const loginAuthor = async (req, res) => {
  try {
    const { email, password } = req.body;
    const author = await Author.findOne({ email });
    if (!author) return res.status(404).json({ message: "Author not found" });

    const match = await bcrypt.compare(password, author.password);
    if (!match) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign({ id: author._id }, JWT_SECRET, { expiresIn: "7d" });

    res.cookie("authorToken", token, {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ success: true, token, author });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Logout author
export const logoutAuthor = (req, res) => {
  res.clearCookie("authorToken");
  res.json({ success: true, message: "Logged out" });
};

// Get all authors
export const getAllAuthors = async (req, res) => {
  const authors = await Author.find().select("-password");
  res.json(authors);
};

// Get one author
export const getAuthorById = async (req, res) => {
  const author = await Author.findById(req.params.id).select("-password");
  if (!author) return res.status(404).json({ message: "Author not found" });
  res.json(author);
};

// Update author
export const updateAuthor = async (req, res) => {
  const { name, bio, experience } = req.body;
  const updated = await Author.findByIdAndUpdate(
    req.params.id,
    { name, bio, experience },
    { new: true }
  ).select("-password");

  res.json({ success: true, author: updated });
};

// Delete author
export const deleteAuthor = async (req, res) => {
  await Author.findByIdAndDelete(req.params.id);
  res.json({ success: true, message: "Author deleted" });
};
