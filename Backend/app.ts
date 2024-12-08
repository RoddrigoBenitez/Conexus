import express from "express";
import dotenv from "dotenv";
import routes from "./routes";
import dbConnect from "./db/dbConnect";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());

// Variables de entorno
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

// Rutas
app.use("/api", routes);

app.get("/", (req, res) => {
    res.send("Welcome to the API!");
});

// Conexión a la base de datos
dbConnect();

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
});