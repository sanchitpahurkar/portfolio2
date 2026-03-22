import mongoose from "mongoose";

const connectDB = async () => {
    const URI = process.env.MONGO_URI;
    await mongoose.connect(URI).then(() => console.log(`✅ MongoDB connected`)).catch((err) =>  {
        console.error(`MongoDB connected error : `, err);
        process.exit(1);
    });
}

export default connectDB;