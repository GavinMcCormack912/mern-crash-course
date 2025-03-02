import mongoose from "mongoose";
// create exportable mongodb server creation function
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("Mongoose connection error");
        process.exit(1) // 1 = failure, 0 = success
    }
}
