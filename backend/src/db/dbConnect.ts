import mongoose from "mongoose";
import initializeDatabase from "./init-db";

export default async function connectDB(forceInitialize: boolean = false) {
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
        
        // Inicializar la base de datos después de conectar
        if (forceInitialize) {
            await initializeDatabase(true); // Forzar la inicialización si es necesario
        } else {
            await initializeDatabase(false);
        }
    } catch (error) {
        console.error("Database connection error:", error);
        throw error; // Relanzamos el error para que `app.ts` lo maneje
    }
}
