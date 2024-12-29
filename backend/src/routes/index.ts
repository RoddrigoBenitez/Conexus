import express from "express";

import mainRoutes from "./main";
import authRoutes from "./auth";
import userRouter from "../models/user/routes";
import productRouter from "../models/products/routes";
import orderRouter from "../models/order/routes";
import categoryRouter from "../models/category/routes";

const router = express.Router();

router.use("/", mainRoutes);
router.use("/auth", authRoutes);
router.use("/user", userRouter);
router.use("/product", productRouter);
router.use("/order", orderRouter);
router.use("/category", categoryRouter);

export default router;
