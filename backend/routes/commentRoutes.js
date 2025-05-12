import express from "express";
import { createComment, likeComment, dislikeComment } from "../controllers/commentController.js";
import { verifyUser } from "../middlewares/verifyUser.js";
const router = express.Router();

router.post("/", createComment);
router.post("/like", verifyUser, likeComment);
router.post("/dislike", verifyUser, dislikeComment);

export default router;
