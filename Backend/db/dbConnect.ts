import mongoose from "mongoose";

export default async function connectDB() {
    if (mongoose.connection.readyState >= 1) {
        console.log("Already connected to the database.");
        return;
    }
    try {
        const mongodbUri = process.env.DB_URI;
        if (!mongodbUri) {
            throw new Error("DB_URI is not defined in the environment variables.");
        }

        await mongoose.connect(mongodbUri);

        console.log("Database connection established successfully.");
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
}
