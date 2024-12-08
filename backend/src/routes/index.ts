import express from "express";
import mainRoutes from "./main";
import authRoutes from "./auth";
import userRoutes from "./user";
import productosRoutes from "./productos";
import pedidosRoutes from "./pedidos";

const router = express.Router();

router.use("/", mainRoutes);
router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/productos", productosRoutes);
router.use("/pedidos", pedidosRoutes);

export default router;
