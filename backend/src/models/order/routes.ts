import express from "express"
import orderController from "./controller"

const orderRouter = express.Router()

const { createOrder, getOrderById, getOrdersByUserId } = orderController

orderRouter.get("/:id", getOrderById);
orderRouter.get("/orderMesero/:id", getOrdersByUserId);
orderRouter.post("/newOrder", createOrder);

export default orderRouter;