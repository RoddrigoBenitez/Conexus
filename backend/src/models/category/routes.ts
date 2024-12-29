import express from "express";
import categoryController from "./controller";

const { getCategories, createCategory, getCategoryById, updateCategory, deleteCategory } =
categoryController;

const categoryRouter = express.Router();

categoryRouter.get("/", getCategories);
categoryRouter.get("/getCategory/:id", getCategoryById);
categoryRouter.post("/createCategory", createCategory);
categoryRouter.put("/updateCategory/:id", updateCategory);
categoryRouter.delete("/deleteCategory/:id", deleteCategory);

export default categoryRouter;