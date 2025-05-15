import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const isAuthor = (req, res, next) => {
  try {
    const token = req.cookies?.authorToken;
    if (!token) {
      return res.status(401).json({ success: false, message: "Not logged in" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.authorId = decoded.id; // attach to request
    next();
  } catch (err) {
    return res.status(403).json({ success: false, message: "Invalid token" });
  }
};
