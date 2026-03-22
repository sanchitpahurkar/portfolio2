import mongoose from "mongoose";
import Blog from "../models/BlogSchema.js";

export async function getBlogs (req, res) {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }    
};

export async function createBlog (req, res) {
    try {
        const { title, description, content, tags, coverImage } = req.body;
        
        // Validate required fields
        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required" });
        }

        // Create new blog document
        const newBlog = new Blog({
            title,
            description: description || "",
            content,
            tags: Array.isArray(tags) ? tags : [],
            coverImage: coverImage || null,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        // Save to database
        const savedBlog = await newBlog.save();
        
        res.status(201).json({ 
            message: "Blog created successfully",
            blog: savedBlog 
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }    
};