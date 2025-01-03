import express  from "express";
import { statusOrderController } from "./controller";

const statusOrderRouter = express.Router();

const { createStatusOrder, getStatusOrder, getStatusOrderById, editStatusOrder, deleteStatusOrder } = statusOrderController


statusOrderRouter.get("/", getStatusOrder);
statusOrderRouter.get("/:id", getStatusOrderById);
statusOrderRouter.post("/newStatusOrder", createStatusOrder);
statusOrderRouter.delete("/deleteStatusOrder/:id", deleteStatusOrder);
statusOrderRouter.put("/editStatusOrder/:id", editStatusOrder);

export default statusOrderRouter