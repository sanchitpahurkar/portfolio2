"use client";
import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import axios from "axios";

const page = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    tags: "",
    coverImage: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleEditorChange = (content) => {
    setFormData((prev) => ({
      ...prev,
      content: content || "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      // Validate required fields
      if (!formData.title.trim()) {
        throw new Error("Title is required");
      }
      if (!formData.content.trim()) {
        throw new Error("Content is required");
      }

      let coverImageUrl = null;

      // Upload cover image to S3 if provided
      if (formData.coverImage) {
        try {
          // Get secure URL from server
          const { data } = await axios.get("http://localhost:5000/s3url");
          const uploadUrl = data.url;

          // Upload image directly to S3 with proper headers
          await axios.put(uploadUrl, formData.coverImage, {
            headers: {
              "Content-Type": formData.coverImage.type || "image/jpeg",
            },
          });

          // Extract the image URL (remove query parameters)
          coverImageUrl = uploadUrl.split("?")[0];
        } catch (error) {
          console.error("Error uploading image to S3:", error);
          throw new Error("Failed to upload cover image. Please check your AWS credentials and bucket CORS settings.");
        }
      }

      // Post blog data to server
      const blogData = {
        title: formData.title,
        description: formData.description,
        content: formData.content,
        tags: formData.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag),
        coverImage: coverImageUrl,
      };

      const response = await axios.post(
        "http://localhost:5000/blogs/create",
        blogData
      );

      setSuccess("Blog published successfully!");
      setFormData({
        title: "",
        description: "",
        content: "",
        tags: "",
        coverImage: null,
      });

      // Reset file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = "";
    } catch (err) {
      setError(err.message || "An error occurred while publishing the blog");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-[#F1F5F9] dark:bg-[#1A1A2E] flex items-center justify-center p-4"
      data-color-mode="dark"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white dark:bg-[#0f1024] rounded-2xl shadow-lg p-8 space-y-4"
      >
        <h1 className="text-3xl font-bold text-[#1A1A2E] dark:text-[#F1F5F9]">
          Create Blog
        </h1>

        {/* Error Message */}
        {error && (
          <div className="p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 rounded-lg">
            {error}
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-200 rounded-lg">
            {success}
          </div>
        )}

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] dark:text-[#F1F5F9] mb-2">
            Title *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter blog title"
            className="w-full h-10 rounded-lg px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1a1f3a] text-[#1A1A2E] dark:text-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] dark:text-[#F1F5F9] mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            placeholder="Short summary of the blog"
            className="w-full rounded-lg px-4 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1a1f3a] text-[#1A1A2E] dark:text-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Content - Markdown Editor */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] dark:text-[#F1F5F9] mb-2">
            Content * (Markdown)
          </label>
          <div className="rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700">
            <MDEditor
              value={formData.content}
              onChange={handleEditorChange}
              height={400}
              preview="live"
              hideToolbar={false}
              visibleDragbar={false}
              textareaProps={{
                placeholder: "Write your blog content in Markdown format...",
              }}
              className="dark:!bg-[#1a1f3a] dark:!color-[#F1F5F9]"
            />
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] dark:text-[#F1F5F9] mb-2">
            Tags
          </label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="e.g. react, cloud, startup (comma-separated)"
            className="w-full rounded-lg px-4 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1a1f3a] text-[#1A1A2E] dark:text-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Cover Image */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] dark:text-[#F1F5F9] mb-2">
            Cover Image
          </label>
          <input
            type="file"
            name="coverImage"
            accept="image/*"
            onChange={handleChange}
            className="block w-full text-sm text-slate-500 dark:text-slate-400
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-lg file:border-0
                       file:bg-[#1A1A2E] file:text-[#F1F5F9]
                       dark:file:bg-[#F1F5F9] dark:file:text-[#1A1A2E]
                       cursor-pointer"
          />
          {formData.coverImage && (
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Selected: {formData.coverImage.name}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg bg-[#1A1A2E] text-[#F1F5F9] dark:bg-[#F1F5F9] dark:text-[#1A1A2E] font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Publishing..." : "Publish Blog"}
        </button>
      </form>
    </div>
  );
};

export default page;
