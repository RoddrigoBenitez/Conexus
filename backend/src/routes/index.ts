import express from "express";

import mainRoutes from "./main";
import authRoutes from "./auth";
import userRouter from "../models/user/routes";
import productRouter from "../models/products/routes";
import orderRouter from "../models/order/routes";
import categoryRouter from "../models/category/routes";
import subCategoryRouter from "../models/subCategory/routes";
import clientsRouter from "../models/clients/routes";
import statusOrderRouter from "../models/statusOrder/routes";

const router = express.Router();

router.use("/", mainRoutes);
router.use("/auth", authRoutes);
router.use("/user", userRouter);
router.use("/product", productRouter);
router.use("/order", orderRouter);
router.use("/category", categoryRouter);
router.use("/subCategory", subCategoryRouter);
router.use("/clients", clientsRouter);
router.use("/statusOrder", statusOrderRouter);

export default router;
