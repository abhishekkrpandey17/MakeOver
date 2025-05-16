import jwt from "jsonwebtoken";
import { Author } from "../models/Author.js";

const JWT_SECRET = process.env.JWT_SECRET;

export const verifyAuthor = async (req, res) => {
  try {
    const token = req.cookies?.authorToken;

    if (!token) {
      return res.status(401).json({ success: false, message: "Not logged in" });
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    const author = await Author.findById(decoded.id).select("-__v");

    if (!author) {
      return res
        .status(404)
        .json({ success: false, message: "Author not found" });
    }

    res.status(200).json({ success: true, author });
  } catch (err) {
    console.error("verifyAuthor error →", err.message);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};
