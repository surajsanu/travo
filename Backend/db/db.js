import mongoose from "mongoose";

const dbName = "travo"; // Replace with your actual database name
const connectDB= async()=> {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process with failure
        
    }
}

export default connectDB;