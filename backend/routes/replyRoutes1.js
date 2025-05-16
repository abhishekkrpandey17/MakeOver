import express from "express";
import {
  createReply,
  getAllReplys,
  getReplyById,
  updateReply,
  deleteReply,
} from "../controllers/replyController1.js";

const router = express.Router();

router.post("/", createReply);
router.get("/", getAllReplys);
router.get("/:id", getReplyById);
router.put("/:id", updateReply);
router.delete("/:id", deleteReply);

export default router;
