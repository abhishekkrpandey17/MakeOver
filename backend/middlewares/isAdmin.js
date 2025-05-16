import jwt from "jsonwebtoken";
import { Admin } from "../models/Admin.js";

export const isAdmin = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(decoded.id).select("-password");

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Optional: check for valid roles here if needed
    if (!["techie", "main-admin", "obac"].includes(admin.role)) {
      return res.status(403).json({ message: "Access denied" });
    }

    req.admin = admin;
    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized", error: err.message });
  }
};
