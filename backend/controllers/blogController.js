import { Blog } from "../models/Blog.js";

// Create a blog post
export const createBlog = async (req, res) => {
  try {
    const { title, content, tags, authorId, link } = req.body;
    const images = req.files?.map((file) => file.filename) || [];

    const blog = new Blog({
      title,
      content,
      tags: tags?.split(",") || [],
      images,
      authorId,
      link,
    });

    await blog.save();
    res.status(201).json({ success: true, blog });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get all blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find()
      .populate("authorId")
      .sort({ createdAt: -1 });
    res.status(200).json({ success: true, blogs });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get a single blog by ID
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id)
      .populate("authorId")
      .populate("comments");

    if (!blog)
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });

    res.status(200).json({ success: true, blog });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Update a blog
export const updateBlog = async (req, res) => {
  try {
    const { title, content, tags, link } = req.body;
    const newImages = req.files?.map((f) => f.filename) || [];

    const updated = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
        tags: tags?.split(",") || [],
        link,
        ...(newImages.length > 0 && { images: newImages }),
      },
      { new: true }
    );

    res.status(200).json({ success: true, blog: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Delete a blog
export const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
