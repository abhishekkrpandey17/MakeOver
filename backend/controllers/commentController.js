import { Comment } from "../models/Comment.js";

export const createComment = async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const likeComment = async (req, res) => {
  const { commentId } = req.body;
  const userId = req.user?.id;

  try {
    const comment = await Comment.findById(commentId);
    if (!comment.likes.includes(userId)) {
      comment.likes.push(userId);
      comment.dislikes = comment.dislikes.filter((id) => id !== userId);
      await comment.save();
    }
    res.json({ message: "Comment liked" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const dislikeComment = async (req, res) => {
  const { commentId } = req.body;
  const userId = req.user?.id;

  try {
    const comment = await Comment.findById(commentId);
    if (!comment.dislikes.includes(userId)) {
      comment.dislikes.push(userId);
      comment.likes = comment.likes.filter((id) => id !== userId);
      await comment.save();
    }
    res.json({ message: "Comment disliked" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
