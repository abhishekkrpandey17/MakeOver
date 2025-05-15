"use client";
import { useState } from "react";
import axios from "axios";
import QuillEditor from "../blogEditor/QuillEditor";

export default function BlogEditor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const [images, setImages] = useState<File[]>([]);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("tags", tags);
    // from login context or token

    images.forEach((img) => formData.append("images", img));

    try {
      await axios.post(
        process.env.NEXT_PUBLIC_APP_API_TEST_URL + "api/v1/blogs/create",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );
      alert("✅ Blog posted!");
    } catch (err) {
      alert("❌ Failed to post blog");
      console.error(err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-5 bg-white rounded-md mt-8">
      <h1 className="text-3xl font-bold text-center">Post a New Blog</h1>

      <input
        className="w-full border p-2 rounded"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="w-full border p-2 rounded"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      {/* Styled upload box */}
      <label
        htmlFor="fileUpload"
        className="block w-full border-2 border-dashed border-gray-400 rounded-md p-4 text-center cursor-pointer hover:bg-purple-50 transition-all"
      >
        <span className="text-gray-600">📁 Choose or drag & drop images</span>
        <input
          id="fileUpload"
          type="file"
          multiple
          className="hidden"
          onChange={(e) => setImages(Array.from(e.target.files || []))}
        />
      </label>

      {/* File names */}
      {images.length > 0 && (
        <div className="text-sm text-gray-500 mt-2">
          {images.map((img) => (
            <p key={img.name}>{img.name}</p>
          ))}
        </div>
      )}

      {/* Rich Text Editor */}
      <QuillEditor value={content} onChange={setContent} />

      <button
        onClick={handleSubmit}
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
      >
        Post Blog
      </button>
    </div>
  );
}
