import express from "express";

import mainRoutes from "./main";
import authRoutes from "./auth";
import userRoutes from "../models/user/controller";

const router = express.Router();

router.use("/", mainRoutes);
router.use("/auth", authRoutes);
router.use("/user", userRoutes);

export default router;
