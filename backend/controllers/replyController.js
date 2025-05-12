import { Reply } from "../models/Reply.js";

export const createReply = async (req, res) => {
  try {
    const reply = new Reply(req.body);
    await reply.save();
    res.status(201).json(reply);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const likeReply = async (req, res) => {
  const { replyId } = req.body;
  const userId = req.user?.id;

  try {
    const reply = await Reply.findById(replyId);
    if (!reply.likes.includes(userId)) {
      reply.likes.push(userId);
      reply.dislikes = reply.dislikes.filter(id => id !== userId);
      await reply.save();
    }
    res.json({ message: "Reply liked" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const dislikeReply = async (req, res) => {
  const { replyId } = req.body;
  const userId = req.user?.id;

  try {
    const reply = await Reply.findById(replyId);
    if (!reply.dislikes.includes(userId)) {
      reply.dislikes.push(userId);
      reply.likes = reply.likes.filter(id => id !== userId);
      await reply.save();
    }
    res.json({ message: "Reply disliked" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
