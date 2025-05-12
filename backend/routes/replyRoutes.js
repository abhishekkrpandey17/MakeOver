import express from "express";
import { createReply, likeReply, dislikeReply } from "../controllers/replyController.js";
import { verifyUser } from "../middlewares/verifyUser.js";
const router = express.Router();

router.post("/", createReply);
router.post("/like", verifyUser, likeReply);
router.post("/dislike", verifyUser, dislikeReply);

export default router;
