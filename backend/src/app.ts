import express from "express";
import dotenv from "dotenv";
import routes from "./routes";
import connectDB from "./db/dbConnect";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000", // Ajusta esto al origen de tu frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
  }));

// Middlewares
app.use(express.json());

// Variables de entorno
const PORT = process.env.PORT || 5001;
const HOST = process.env.HOST || "localhost";

// Rutas
app.use("/api", routes);

// Conexión a la base de datos y lanzamiento del servidor
(async () => {
    try {
        await connectDB(); // Puedes pasar `true` si quieres forzar la inicialización
        app.listen(PORT, () => {
            console.log(`Server is running at http://${HOST}:${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start the server:", error);
        process.exit(1);
    }
})();