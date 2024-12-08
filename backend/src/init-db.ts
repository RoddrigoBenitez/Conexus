import mongoose from "mongoose";
import User from "./models/User";

async function initializeDatabase(force: boolean = false) {
    try {
        if (!mongoose.connection.readyState) {
            throw new Error("Mongoose is not connected");
        }

        if (force) {
            await mongoose.connection.dropDatabase().catch(error => {
                throw new Error(`Error dropping database: ${error.message}`);
            });
            console.log("Database dropped.");
        }

        await User.init().catch(error => {
            throw new Error(`Error initializing User collection: ${error.message}`);
        });

        console.log("Database initialized, collections created.");
    } catch (error) {
        console.error("Error initializing database:", error);
    }
}

export default initializeDatabase;