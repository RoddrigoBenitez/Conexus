import { Request, Response } from "express";
import categoryService from "./service";

const { createCategory, getCategories, addSubCategoriesToCategory, getCategoryById, updateCategory, deleteCategory } =
  categoryService;

class CategoryController {
  async getCategories(req: Request, res: Response) {
    try {
      const categories = await getCategories();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  async createCategory(req: Request, res: Response) {
    try {
      const { name, subCategories } = req.body;
      const newCategory = await createCategory({ name, subCategories });
      res.status(201).json(newCategory);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async getCategoryById(req: Request, res: Response){
      const { _id } = req.params
    try {
        const category = await getCategoryById(_id)
        return res.status(200).json(category)
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
      }
  }

  // async addSubCategoriesToCategory(){} falta definir subCategory

  async updateCategory(req: Request, res: Response) {
    try {
      const { _id } = req.params;
      const { name, subCategories } = req.body;
      const updatedCategory = await updateCategory(_id, { name, subCategories });
      res.status(200).json(updatedCategory);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
  async deleteCategory(req: Request, res: Response) {
    try {
      const { _id } = req.params;
      const deletedCategory = await deleteCategory(_id);
      res.status(200).json(deletedCategory);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  
}

const categoryController = new CategoryController();

export default categoryController;