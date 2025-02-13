import Category from "./model";

class CategoryDao {
    async getCategories() {
      try {
        return await Category.find().populate("subCategories", "name");
      } catch (error) {
        throw Error((error as Error).message);
      }
    }
    async getCategoryById(id: string) {
      try {
        return await Category.findById(id).populate("subCategories._id", "name");
      } catch (error) {
        throw new Error((error as Error).message);
      }
    }
    async createCategory(category: { name: string; subCategories?: { _id: string }[] }) {
      try {
        const subCategoryIds = category.subCategories?.map((sub) => sub._id) || [];
        const newCategory = await Category.create({
            name: category.name,
            subCategories: subCategoryIds,
        });
        return newCategory;
      } catch (error) {
        throw new Error((error as Error).message);
      }
    }
   
    // este metodo gregar Subcategorias a una categoria existente
    
    async addSubCategoriesToCategory(categoryId: string, subCategoryIds: { _id: string }[]) {
      try {
        const updatedCategory = await Category.findByIdAndUpdate(
          categoryId,
          { $push: { subCategories: { $each: subCategoryIds } } },
          { new: true }
        );
        return updatedCategory;
      } catch (error) {
        throw new Error((error as Error).message);
      }
    }
    async updateCategory(_id: string, update: object, options = { new: true }) {
      try {
        const updatedCategory = await Category.findByIdAndUpdate(_id, update, options);
        return updatedCategory;
      } catch (error) {
        throw new Error((error as Error).message);
      }
    }
    async deleteCategory(_id: string) {
      try {
        return await Category.findByIdAndDelete(_id);
      } catch (error) {
        throw new Error((error as Error).message);
      }
    }
    
  }
  
  const categoryDao = new CategoryDao();
  
  export default categoryDao;