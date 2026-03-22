import { Router } from "express";
import { getBlogs, createBlog } from "../controllers/blog.controller.js"

const blogRouter = Router();

blogRouter.get('/', getBlogs);
blogRouter.post('/create', createBlog);

export default blogRouter;