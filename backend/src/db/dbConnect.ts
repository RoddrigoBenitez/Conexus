import mongoose from "mongoose";

export default async function connectDB() {
    if (mongoose.connection.readyState >= 1) {
        console.log("Already connected to the database.");
        return;
    }
    try {
        const dbUri = process.env.DB_URI;

        if (!dbUri) {
        throw new Error("DB_URI is not defined in environment variables.");
        }

        
        console.log("Connecting to database: ", dbUri);
        await mongoose.connect(dbUri);

        console.log("Database connection established successfully.");
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
}
