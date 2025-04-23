import express from "express";
import subCategoryController from "./controller";

const { getSubCategories, createSubCategory, getSubCategoryById, updateSubCategory, deleteSubCategory} =
  subCategoryController;

const subCategoryRouter = express.Router();

subCategoryRouter.get("/", getSubCategories);
subCategoryRouter.get("/getSubCategory/:id", getSubCategoryById);
subCategoryRouter.post("/addSubCategory", createSubCategory);
subCategoryRouter.put("/updateSubCategory/:id", updateSubCategory);
subCategoryRouter.delete("/deleteSubCategory/:id", deleteSubCategory);

export default subCategoryRouter;