import mongoose from "mongoose";

const ImageSchema = mongoose.Schema({
    url: { type: String, required: true },
    key: { type: String, required: true }
}, { _id: false });

export default ImageSchema;