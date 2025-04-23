import mongoose from "mongoose";
import { User } from "../models/user";
import { Product } from "../models/products";
import { Category } from "../models/category";
import { Clients } from "../models/clients";
import { Order } from "../models/order";
import { StatusOrder } from "../models/statusOrder";
import { SubCategory } from "../models/subCategory";

async function initializeDatabase(force: boolean = false) {
    const modelsToCreate = [
        User, Product, Category, Clients, Order, StatusOrder, SubCategory,
    ];

    try {
        if (!mongoose.connection.readyState) {
            throw new Error("Mongoose is not connected");
        }

        if (force) {
            await mongoose.connection.dropDatabase();
            console.log("Database dropped.");
        }

        for (const model of modelsToCreate) {
            await model.init();
        }

        console.log("Database initialized, collections created.");
    } catch (error) {
        console.error("Error initializing database:", error);
        throw error; // Lanzamos el error para que `connectDB` lo maneje
    }
}

export default initializeDatabase;