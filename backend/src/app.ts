import express from "express";
import dotenv from "dotenv";
import routes from "./routes";
import dbConnect from "./db/dbConnect";
import initializeDatabase  from "./init-db";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());

// Variables de entorno
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

// Rutas
app.use("/api", routes);

dbConnect().then(() => {
    initializeDatabase(true);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
});