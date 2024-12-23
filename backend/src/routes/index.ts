import express from "express";

import mainRoutes from "./main";
import authRoutes from "./auth";
import userRouter from "../models/user/routes";
import productRouter from "../models/products/routes";

const router = express.Router();

router.use("/", mainRoutes);
router.use("/auth", authRoutes);
router.use("/user", userRouter);
router.use("/product", productRouter);

export default router;
