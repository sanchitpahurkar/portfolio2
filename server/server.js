import express from "express";
import cors from "cors";
import dotenv from "dotenv"; 
import connectDB from "./db.js";
import blogRouter from "./routes/blog.routes.js";
import { generateUploadUrl } from "./middlewares/s3.js";

dotenv.config();
const app = express();

app.use(cors({
    origin: process.env.CLIENT_ORIGIN || "*",
}));
app.use(express.json());

// mongodb connection
connectDB();

// routes
app.use('/blogs', blogRouter);

// s3 url
app.get('/s3url', async (req, res) => {
    const url = await generateUploadUrl();
    res.send({url});
})

// server initiation
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Backend connected to port ${PORT}`);    
});