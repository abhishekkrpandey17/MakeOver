import express from "express";
import {
  registerAuthor,
  loginAuthor,
  logoutAuthor,
  getAllAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
} from "../controllers/authorController.js";
import { verifyAuthor } from "../middlewares/VerifyAuthor.js";
import { isAuthor } from "../middlewares/isAuthor.js";

const router = express.Router();

// Auth routes
router.post("/register", registerAuthor);
router.post("/login", loginAuthor);
router.post("/logout", logoutAuthor);

// ✅ FIXED: Static route before dynamic
router.get("/verify", verifyAuthor);

// Public routes
router.get("/", getAllAuthors);
router.get("/:id", getAuthorById);

// Protected routes
router.put("/:id", isAuthor, updateAuthor);
router.delete("/:id", isAuthor, deleteAuthor);

export default router;
