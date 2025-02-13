import categoryDao from "./dao";

const { getCategoryById, getCategories, createCategory, addSubCategoriesToCategory, updateCategory, deleteCategory } =
  categoryDao;

class CategorySercice {
  async getCategories() {
    try {
      const categories = await getCategories()
      return categories;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async getCategoryById(_id: string){
    try {
      const getCategory = await getCategoryById(_id)
      return getCategory
    } catch (error) {
        throw Error((error as Error).message);
    }
  }
  async createCategory(category: { name: string; subCategories?: { _id: string }[] }) {
    try {
      const newCategory = await createCategory(category);
      return newCategory;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  
  async addSubCategoriesToCategory(categoryId: string, subCategoryIds: { _id: string }[]) {
    try {
      const updatedCategory = await addSubCategoriesToCategory(categoryId, subCategoryIds);
      return updatedCategory;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async updateCategory(_id: string, category: { name: string; subCategories?: string[] }) {
    try {
      const updatedCategory = await updateCategory(
        _id,
        {
          name: category.name,
          ...(category.subCategories && { subCategories: category.subCategories }),
        }
      )
  
      return updatedCategory;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async deleteCategory(_id: string) {
    try {
      const deletedCategory = await deleteCategory(_id);
      if (!deletedCategory) throw new Error("Categoría no encontrada");
      return deletedCategory;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  
}

const categoryService = new CategorySercice();

export default categoryService;