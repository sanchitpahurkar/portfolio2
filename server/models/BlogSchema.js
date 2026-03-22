import mongoose from "mongoose";
import ImageSchema from "./ImageSchema.js";

const BlogSchema = mongoose.Schema({
    title: { type:String, required: true },
    description: { type:String, },
    content: { type:String, required: true },
    tags: { type: [String], default: [] },
    coverImage: { type: ImageSchema },
    assets: { type: [ImageSchema], default: [] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Blog = mongoose.model('Blog', BlogSchema);

export default Blog;