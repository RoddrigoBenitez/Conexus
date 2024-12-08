import mongoose from "mongoose";
import User from "./models/User";
import Producto from "./models/Producto";

async function initializeDatabase() {
    try {
        // Inserta datos iniciales o valida el esquema para crear las colecciones
        await User.init(); // Asegura que el índice único de User se cree
        await Producto.init(); // Crea índices para Producto si los hay

        console.log("Database initialized, collections created.");
    } catch (error) {
        console.error("Error initializing database:", error);
    }
}

export default initializeDatabase;
