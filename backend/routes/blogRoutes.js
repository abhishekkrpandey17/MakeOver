import express from "express";
import {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";
import { upload } from "../middlewares/uploadMiddleware.js";
import { isAuthor } from "../middlewares/isAuthor.js";

const router = express.Router();

router.post("/create", isAuthor, upload.array("images", 5), createBlog);
router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.put("/:id", upload.array("images", 5), updateBlog);
router.delete("/:id", deleteBlog);

export default router;
